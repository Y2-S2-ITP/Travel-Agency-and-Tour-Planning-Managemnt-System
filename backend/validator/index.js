exports.userSignupValidator = (req, res, next) => {
    req.check("name", "Name is required").notEmpty();
    req.check("email", "Email must be between 3 to 32 characters")
        .matches(/.+\@.+\..+/)
        .withMessage("Email must contain @")
        .isLength({
            min: 4,
            max: 32
        });
    req.check("password", "Password is required").notEmpty();
    req.check("password")
        .isLength({ min: 6 })
        .withMessage("Password must contain at least 6 characters")
        .matches(/\d/)
        .withMessage("Password must contain a number");
    req.check("date","Date of birth is required").notEmpty();
    req.check("address","Address is required").notEmpty();
    req.check("number","Phone Number is required").notEmpty();
    req.check("number")
        .isLength({ min: 10})
        .withMessage("Enter valid phone number");
    req.check("zip","Zip/Postal code is required").notEmpty(); 
    req.check("country","Country is required").notEmpty();
           
    const errors = req.validationErrors();
    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({ error: firstError });
    }
    next();
};
