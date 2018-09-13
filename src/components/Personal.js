import React, { Component } from 'react'
import axios from 'axios';
import './Personal.css'

class Personal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            famaly_name: '',
            guardian_cif: '',
            salution: '',
            full_name: '',
            short_name: '',
            first_name: '',
            middle_name: '',
            third_name: '',
            region_of_crimea: '',
            language: '',
            gender: '',
            date_of_birth: '',
            mothers_name: '',
            marital_status: '',
            no_of_dpendents: '',
            accomodation: '',
            pep: '',
            aml: '',
            central_bank: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        axios.get(`http://localhost:3001/personal`)
            .then(res => {
                const personal = res.data;
                this.setState(personal);
            })
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post(`http://localhost:3001/personal`, this.state)
            .then(res => {
                this.formRef.innerHTML = "Success";
            })
    }

    render() {
        return (
            <div>
                <div className="personal-detail">
                    <form onSubmit={this.handleSubmit} ref={(ref) => this.formRef = ref}>
                        <div className="header_block">
                            <h2>Personal Details</h2>
                            <input type="submit" value="Next" />
                        </div>
                        <div className="block">
                            <div className="block-item"><input autoComplete="off" type="text" placeholder="Famaly Name" name="famaly_name" value={this.state.famaly_name} onChange={this.handleChange} /></div>
                            <div className="block-item"><input autoComplete="off" type="text" placeholder="Guardian CIF" name="guardian_cif" value={this.state.guardian_cif} onChange={this.handleChange} /></div>
                            <div className="block-item">
                                <select required name="salution" value={this.state.salution} onChange={this.handleChange}>
                                    <option disabled value="">* Solution</option>
                                    <option value="Solution 1">Solution 1</option>
                                    <option value="Solution 2">Solution 2</option>
                                </select>
                            </div>
                            <div className="block-item"><input autoComplete="off" type="text" placeholder="* Full Name" required name="full_name" value={this.state.full_name} onChange={this.handleChange} /></div>
                            <div className="block-item"> <input autoComplete="off" type="text" placeholder="* Short Name" required name="short_name" value={this.state.short_name} onChange={this.handleChange} /></div>
                            <div className="block-item"><input autoComplete="off" type="text" placeholder="* First Name" required name="first_name" value={this.state.first_name} onChange={this.handleChange} /></div>
                            <div className="block-item"><input autoComplete="off" type="text" placeholder="Middle Name" name="middle_name" value={this.state.middle_name} onChange={this.handleChange} /></div>
                            <div className="block-item"><input autoComplete="off" type="text" placeholder="Third Name" name="third_name" value={this.state.third_name} onChange={this.handleChange} /></div>
                        </div>

                        <div className="block">
                            <div className="block-item"><input autoComplete="off" type="text" placeholder="Region of crimea" name="region_of_crimea" value={this.state.region_of_crimea} onChange={this.handleChange} /></div>
                            <div className="block-item">
                                <select required name="language" value={this.state.language} onChange={this.handleChange}>
                                    <option disabled value="">* Language</option>
                                    <option value="Armenian">Armenian</option>
                                    <option value="Russian">Russian</option>
                                    <option value="English">English</option>
                                </select>
                            </div>
                            <div className="block-item">
                                <select required name="gender" value={this.state.gender} onChange={this.handleChange}>
                                    <option disabled value="">* Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div className="block-item"><input autoComplete="off" type="text" placeholder="Date of birth" name="date_of_birth" value={this.state.date_of_birth} onChange={this.handleChange} /></div>
                            <div className="block-item"> <input autoComplete="off" type="text" placeholder="Mother's name" name="mothers_name" value={this.state.mothers_name} onChange={this.handleChange} /></div>
                            <div className="block-item">
                                <select required name="marital_status" value={this.state.marital_status} onChange={this.handleChange}>
                                    <option disabled value="">* Marital status</option>
                                    <option value="Marital status 1">Marital status 1</option>
                                    <option value="Marital status 2">Marital status 2</option>
                                    <option value="Marital status 3">Marital status 3</option>
                                </select>
                            </div>
                            <div className="block-item"><input autoComplete="off" type="text" placeholder="* No of dpendents" required name="no_of_dpendents" value={this.state.no_of_dpendents} onChange={this.handleChange} /></div>
                            <div className="block-item">
                                <select name="accomodation" value={this.state.accomodation} onChange={this.handleChange}>
                                    <option disabled value="">Accomodation</option>
                                    <option value="Accomodation 1">Accomodation 1</option>
                                    <option value="Accomodation 2">Accomodation 2</option>
                                    <option value="Accomodation 3">Accomodation 3</option>
                                </select>
                            </div>
                        </div>

                        <div className="block">
                            <div className="block-item">
                                <select required name="pep" value={this.state.pep} onChange={this.handleChange}>
                                    <option disabled value="">* PEP</option>
                                    <option value="PEP 1">PEP 1</option>
                                    <option value="PEP 2">PEP 2</option>
                                    <option value="PEP 3">PEP 3</option>
                                </select>
                            </div>
                            <div className="block-item"><input autoComplete="off" type="text" placeholder="AML Risk Rating" name="aml" value={this.state.aml} onChange={this.handleChange} /></div>
                            <div className="block-item"> <input autoComplete="off" type="text" placeholder="* Central Bank chekc code" required name="central_bank" value={this.state.central_bank} onChange={this.handleChange} /></div>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

export default Personal;