import React, { Component } from 'react'

export default class Step3edit extends Component {
    render() {
        if (this.props.currentStep !== 3) {
            return null
        }
        return (
            <div>
                <div>
                    <form>
                        <label htmlFor="description" >Description</label>
                        <textarea onChange={this.props.handleChange} id="description" value={this.props.description} name="description" cols="30" rows="10" defaultValue={this.props.description}></textarea>
                    </form>
                </div>
            </div>
        )
    }
}
