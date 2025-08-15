import { useState } from "react";
// Remember the regular expression for email field
export default function App() {
    const [name, setName] = useState("");
    const [nameErr, setNameErr] = useState("");

    const [email, setEmail] = useState("");
    const [emailErr, setEmailErr] = useState("");

    const [employeeId, setEmployeeId] = useState("");
    const [employeeIdErr, setEmployeeIdErr] = useState("");

    const [joiningDate, setJoiningDate] = useState("");
    const [joiningDateErr, setJoiningDateErr] = useState("");

    const isEmployeeIdFieldValidated = () => {
        if (employeeId.length < 6) {
            setEmployeeIdErr("Employee Id must be exactly 6 digits");
            return false;
        } else {
            setEmployeeIdErr("");
            return true;
        }
    };

    const isJoiningDateValidated = () => {
        const currentDate = new Date();
        let joiningDates = new Date(joiningDate);
        if (joiningDates > currentDate) {
            setJoiningDateErr("Joining date cannot be in the future.");
            return false;
        } else {
            setJoiningDateErr("");
            return true;
        }
    };
    const isEmailFieldValidated = () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let isResult = false;
        if (emailRegex.test(email)) {
            setEmailErr("");
            isResult = true;
        } else {
            isResult = false;
            setEmailErr("Please enter a valid email");
        }
        return isResult;
    };

    const isNameValidated = () => {
        if (name.length > 4 && /^[a-zA-Z\s]/.test(name)) {
            setNameErr("");
            return true;
        } else {
            setNameErr(
                "Name must be at least 4 characters long and only containers letters and spaces."
            );
            return false;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (
            isNameValidated() ||
            isEmailFieldValidated() ||
            isEmployeeIdFieldValidated() ||
            isJoiningDateValidated()
        ) {
            console.log("You have entered a valid name", name);
        }
    };

    return (
        <div className="App">
            <h1>Form Field Validation</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-item-wrap">
                    <label htmlFor="name">Name : </label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        autoComplete="off"
                        onChange={(e) => setName(e.target.value)}
                    />
                    {nameErr && <span>{nameErr}</span>}
                </div>
                <div className="form-item-wrap">
                    <label htmlFor="email">Email : </label>
                    <input
                        type="email"
                        name="email"
                        autoComplete="off"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailErr && <span>{emailErr}</span>}
                </div>

                <div className="form-item-wrap">
                    <label htmlFor="employeeId">EmployeeId : </label>
                    <input
                        type="number"
                        name="employeeId"
                        autoComplete="off"
                        id="employeeId"
                        value={employeeId}
                        onChange={(e) => setEmployeeId(e.target.value)}
                    />
                    {employeeIdErr && <span>{employeeIdErr}</span>}
                </div>

                <div className="form-item-wrap">
                    <label htmlFor="joiningDate">Joining Date : </label>
                    <input
                        type="date"
                        name="joiningDate"
                        autoComplete="off"
                        id="joiningDate"
                        value={joiningDate}
                        onChange={(e) => setJoiningDate(e.target.value)}
                    />
                    {joiningDateErr && <span>{joiningDateErr}</span>}
                </div>
                <input type="submit" />
            </form>
        </div>
    );
}
