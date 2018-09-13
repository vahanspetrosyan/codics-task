import React, { Component } from 'react'
import axios from 'axios'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import { formatDate, parseDate } from "react-day-picker/moment"

import 'react-day-picker/lib/style.css'
import './Identification.css'
function clean(obj) {
    const newObj = {};
    for (var propName in obj) {
        if (obj[propName] === null || obj[propName] === undefined || obj[propName] !== "") {
            newObj[propName] = obj[propName];
        }
    }
    return newObj;
}
class Identification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eid_cards: {
                params: {
                    "eid_number": "",
                    "eid_issue_date": "",
                    "eid_expiry_date": "",
                    "uae_visa_no": ""
                },
                items: []
            }
        };
        this.handleChangeEid = this.handleChangeEid.bind(this);
        this.handleChangeEidDate = this.handleChangeEidDate.bind(this);
        this.handleSubmitEid = this.handleSubmitEid.bind(this);
    }
    componentDidMount() {
        axios.get(`http://localhost:3001/eid_cards`)
            .then(res => {
                const personal = res.data;
                this.setState({
                    ...this.state,
                    eid_cards: {
                        params: this.state.eid_cards.params,
                        items: personal
                    }
                });
            })
    }

    handleChangeEid(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState({
            ...this.state,
            eid_cards: {
                ...this.state.eid_cards,
                params: {
                    ...this.state.eid_cards.params,
                    [name]: value
                }
            }
        });
    }

    handleChangeEidDate(selectedDay, modifiers, dayPickerInput) {
        const input = dayPickerInput.getInput();
        const value = input.value;
        const name = input.name;
        // this.setState({
        //   selectedDay,
        //   isEmpty: !input.value.trim(),
        //   isDisabled: modifiers.disabled === true,
        // });
        this.setState({
            ...this.state,
            eid_cards: {
                ...this.state.eid_cards,
                params: {
                    ...this.state.eid_cards.params,
                    [name]: value
                }
            }
        });
    }

    handleSubmitEid(event) {
        event.preventDefault();
        const params = clean(this.state.eid_cards.params);
        axios.get(`http://localhost:3001/eid_cards`, { params })
            .then(res => {
                this.setState({
                    ...this.state,
                    eid_cards: {
                        ...this.state.eid_cards,
                        items: res.data
                    }
                });
            })
    }
    render() {
        var eids = this.state.eid_cards.items;
        return (
            <div>
                <div className="identification">
                    <div className="header_block">
                        <h2>Identification</h2>
                    </div>
                    <div className="block">
                        <form onSubmit={this.handleSubmitEid} ref={(ref) => this.formRef = ref}>
                            <input type="submit" value="Read EID Card" />
                            <div className="block-items">
                                <div className="block-item"><input autoComplete="off" type="text" placeholder="EID Number" name="eid_number" value={this.state.eid_cards.params.eid_number} onChange={this.handleChangeEid} /></div>
                                <div className="block-item">
                                    <DayPickerInput
                                        formatDate={formatDate}
                                        parseDate={parseDate}
                                        format="YYYY-MM-DD"
                                        placeholder="EID issue date"
                                        value={(this.state.eid_cards.params.eid_issue_date !== "" ? formatDate(this.state.eid_cards.params.eid_issue_date, "YYYY-MM-DD") : '')}
                                        onDayChange={this.handleChangeEidDate}
                                        inputProps={{ name: "eid_issue_date", autoComplete: "off" }}
                                    />
                                </div>
                                <div className="block-item">
                                    <DayPickerInput
                                        formatDate={formatDate}
                                        parseDate={parseDate}
                                        format="YYYY-MM-DD"
                                        placeholder="EID expiry date"
                                        value={(this.state.eid_cards.params.eid_expiry_date !== "" ? formatDate(this.state.eid_cards.params.eid_expiry_date, "YYYY-MM-DD") : '')}
                                        onDayChange={this.handleChangeEidDate}
                                        inputProps={{ name: "eid_expiry_date", autoComplete: "off" }}
                                    />
                                </div>
                                <div className="block-item"><input autoComplete="off" type="text" placeholder="UAE Visa No." name="uae_visa_no" value={this.state.eid_cards.params.uae_visa_no} onChange={this.handleChangeEid} /></div>
                            </div>
                            <div className="block-items">
                                {(() => {
                                    if (eids.length > 0) {
                                        return (
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>EID Number</th>
                                                        <th>EID issue date</th>
                                                        <th>EID expiry date</th>
                                                        <th>UAE Visa No.</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        eids.map((v, k) => {
                                                            return (
                                                                <tr key={k}>
                                                                    <td>{v.eid_number}</td>
                                                                    <td>{v.eid_issue_date}</td>
                                                                    <td>{v.eid_expiry_date}</td>
                                                                    <td>{v.uae_visa_no}</td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        )
                                    }
                                })()}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Identification;