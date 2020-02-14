function  validateEmail(email){
    return fetch('http://apilayer.net/api/check?access_key='+process.env.REACT_APP_ACS_Key+'&email='+ email)
    .then(res => res.json())
    .then(
        (result)=>{
            if(result.email){
            return { success : true, status : result.format_valid && result.mx_found && result.smtp_check};
            }
            return {success : false, status : result.error.info };
        })
    .catch((error) =>{
            return {success : false, status : error ? error : 'Please try again ...'};
    })
}
async function  validate(fields){
    const{firstName,lastName,companyName,email,phoneNumber}=fields;
    var errors='';
    if(!firstName){
        errors += ' First Name is required ';
    }
    if(!lastName){
        errors +=' Last Name is required ';
    }
    if(!companyName){
        errors += ' Company Name is required '; 
    }
    if(!email){
        errors += ' Email is required ';
    }else{
        await validateEmail(email).then( check =>{
            if (check.success){
                if(!check.status){
                    errors += ' Email address is not valid '
                }
            }else{
                errors=' Something went wrong '+ check.status;
                return errors;
            }
        });
    }
    if(!phoneNumber){
        errors += ' Phone Number is required ';
    }else if(!phoneNumber.match(/^\d{10}$/)){
        errors += 'Phone Number must be 10 digits with only numbers'
    }
    return errors;
}
export default validate;