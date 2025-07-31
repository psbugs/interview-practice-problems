import React, { useState } from "react";

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState<{ name: string; email: string; message: string }>({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleContactInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        updater: React.Dispatch<React.SetStateAction<string>>
    ) => {
        const { name, value } = e.target;
        setErrors((prevErr) => ({
            ...prevErr,      // keep old errors
            [name]: "",      // clear error for the current field
        }));
        updater(value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("submitted is clicked");
        const isValidContact = validateContactInfo();
        if (isValidContact) {
            setIsSubmitted(true);
        }
    };

    const validateContactInfo = () => {
        const newErrors = { name: "", email: "", message: "" };

        if (!name.trim()) newErrors.name = "Name is required";
        if (!email.trim()) newErrors.email = "Email is required";
        if (!message.trim()) newErrors.message = "Message is required";

        setErrors(newErrors);

        // if all fields are empty, return false; else true
        return !Object.values(newErrors).some((err) => err !== "");
    };

    return (
        <div className="form-container">
            {!isSubmitted ? (
                <>
                    <form>
                        <div>
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={(e) => handleContactInputChange(e, setName)}
                            />
                            {errors.name && <p>{errors.name}</p>}
                        </div>

                        <div>
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => handleContactInputChange(e, setEmail)}
                            />
                            {errors.email && <p>{errors.email}</p>}
                        </div>

                        <div>
                            <label>Message</label>
                            <input
                                type="text"
                                name="message"
                                value={message}
                                onChange={(e) => handleContactInputChange(e, setMessage)}
                            />
                            {errors.message && <p>{errors.message}</p>}
                        </div>
                    </form>
                    <input onClick={handleSubmit} type="submit" />
                </>
            ) : (
                <div>Thank you user</div>
            )}
        </div>
    );
}

export default ContactForm;
