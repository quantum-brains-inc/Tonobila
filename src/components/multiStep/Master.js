import React, { Component } from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import firebase from '../../Firebase'
import FileUploader from "react-firebase-file-uploader";
import './multistep.css'

export default class Master extends Component {
    constructor(props) {
    super(props)
        this.ref = firebase.firestore().collection('posts');
        this.state = {
            currentStep: 1,
            title: '',
            description: '',
            carrosserie:'',
            adresse:'',
            telephone:'',
            author: '',
            uid: '',
            ville:'',
            marque: '',
            prix: '',
            modele: '',
            carburant: '',
            main:'',
            puissance_fiscale:'',
            annee: '',
            couleur_ex: '',
            couleur_in: '',
            type_cha: '',
            kilometrage: '',
            num_port: '',
            filenames: [],
            downloadURLs: [],
            isUploading: false,
            errorText:'',
            progress: 0,
        }
        this.handleChange = this.handleChange.bind(this)
        this._next = this._next.bind(this)
        this._prev = this._prev.bind(this)
    }

    _next() {
        let currentStep = this.state.currentStep ;
        const step1Names = ['marque','modele','adresse','telephone','ville','annee','prix'];
        const step2Names = ['main','carburant','couleur_ex','couleur_in','carrosserie','kilometrage','num_port','puissance_fiscale']
        let namesArray;
        switch(currentStep) {
            case 1:
                namesArray = step1Names;
              break;
            case 2:
                namesArray = step2Names;
              break;
        }
        let count = 0;
        for(let i = 0 ; i < namesArray.length ; i++ ){
            if( this.state[namesArray[i]] == '' ||  this.state[namesArray[i]] == undefined){
                count++
            }
        }
        if(count === 0){
            currentStep = currentStep >= 2 ? 3 : currentStep + 1
            this.setState({
                currentStep: currentStep,
                errorText: ''
            })
        }else{
            this.setState({ errorText:"veuillez choisir une valeur"})
        }
    }

    _prev() {
        let currentStep = this.state.currentStep
        currentStep = currentStep <= 1 ? 1 : currentStep - 1
        this.setState({
            currentStep: currentStep
        })
    }
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    metaData = () => {
        let user = firebase.auth().currentUser;
        let name = user.displayName;
        let uid = user.uid;
        this.setState({
            author: { name },
            uid: { uid }
        })
        this.props.history.push('/');
    }

    handleSubmit = (event) => {
        event.preventDefault()
        
        const { title, description,ville, author,telephone, adresse, main, carrosserie, uid, marque, downloadURLs, prix, modele, carburant, annee, couleur_ex, couleur_in, type_cha, kilometrage, num_port, puissance_fiscale } = this.state;

        if(downloadURLs.length !== 0 && description != ''){
            
            this.ref.add({
                title,
                description,
                marque,
                main,
                ville,
                downloadURLs,
                author,
                telephone,
                adresse,
                carrosserie,
                puissance_fiscale,
                uid,
                prix,
                modele,
                carburant,
                annee,
                couleur_ex,
                couleur_in,
                type_cha,
                kilometrage,
                num_port
            }).then((docRef) => {
                console.log(this.state)
                this.setState({
                    title: '',
                    adresse:'',
                    author: '',
                    main:'',
                    telephone:'',
                    uid: '',
                    description: '',
                    puissance_fiscale:'',
                    marque: '',
                    carrosserie,
                    prix: '',
                    modele: '',
                    carburant: '',
                    ville: '',
                    annee: '',
                    couleur_ex: '',
                    couleur_in: '',
                    type_cha: '',
                    kilometrage: '',
                    num_port: '',
                    errorText:'',
                    downloadURLs: []
                });
            })
        }else{
            this.setState({errorText:"Please, upload your car's images and fill the description"})
        }
    }
    handleChangeUsername = event =>
        this.setState({ username: event.target.value });
    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
    handleProgress = progress => this.setState({ progress });
    handleUploadError = error => {
        this.setState({ isUploading: false });
        console.error(error);
    };
    handleUploadSuccess = async filename => {
        const downloadURL = await firebase
            .storage()
            .ref("images")
            .child(filename)
            .getDownloadURL();

        this.setState(oldState => ({
            filenames: [...oldState.filenames, filename],
            downloadURLs: [...oldState.downloadURLs, downloadURL],
            uploadProgress: 100,
            isUploading: false
        }));
    };
    get previousButton() {
        let currentStep = this.state.currentStep;
        if (currentStep !== 1) {
            return <button type="button" className="prevBtn" onClick={this._prev}>Précédent</button>
        }
        return null;
    }
    get nextButton() {
        let currentStep = this.state.currentStep;
        if (currentStep < 3) {
            return (
                <button
                    type="button" onClick={this._next}>
                    Suivant
      </button>
            )
        }
        return null;
    }
    render() {
        let progressstepClasses = ['steps_progress'];
        if(this.state.currentStep === 2){
            progressstepClasses = ['steps_progress','steps_progress2'];
        }
        if(this.state.currentStep === 3){
            progressstepClasses = ['steps_progress','steps_progress2','steps_progress3'];
        }
        return (
            <React.Fragment>
            <div className="addEditPostContainer"> 
                <div className={progressstepClasses.join(' ')}>
                    <h1 className="addEditPostTitle">Ajouter un post</h1>
                    <div>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                    </div>
                </div>
                
                <form className="addEditPostForm" onSubmit={this.handleSubmit}>
                    
                    <Step1
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        marque={this.state.marque}
                        modele={this.state.modele}
                        adresse={this.state.adresse}
                        ville={this.state.ville}
                        annee={this.state.annee}
                        prix={this.state.prix}
                    />
                    <Step2
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        main={this.state.main}
                        carburant={this.state.carburant}
                        carrosserie={this.state.carrosserie}
                        couleur_ex={this.state.couleur_ex}
                        couleur_in={this.state.couleur_in}
                        kilometrage={this.state.kilometrage}
                        num_port={this.state.num_port}
                        puissance_fiscale={this.state.puissance_fiscale}
                    />
                    <Step3
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        description={this.state.description}
                    />
                     {this.state.currentStep == 3 ?
                    <div className="uploadImagesArea">
                        <form>
                            <FileUploader
                                accept="image/*"
                                name="image"
                                randomizeFilename
                                storageRef={firebase.storage().ref("images")}
                                onUploadStart={this.handleUploadStart}
                                onUploadError={this.handleUploadError}
                                onUploadSuccess={this.handleUploadSuccess}
                                onProgress={this.handleProgress}
                                multiple
                            />
                        </form>
                            {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
                            {this.state.avatarURL && <img src={this.state.avatarURL} />}
                            <div className="uploadedimages">{this.state.downloadURLs.map((downloadURL, i) =><img style={{width:'80px',marginRight:'5px'}} key={i} src={downloadURL} />)}</div>
                    </div>
                    : null
                        }
                    <div className="prevNextBtnsContainer">
                        <p>{this.state.errorText}</p>
                        <div>
                            {this.previousButton}
                            {this.nextButton}
                            {this.state.currentStep == 3 ? <button type="submit" onClick={this.metaData}>Post</button> : null}
                        </div>
                        
                    </div>
                </form>
            </div>
            </React.Fragment>
        )
    }
}
