import React from 'react';

const Contact = () => {
    return (
        <>
        <div>
            <h1 className="text-center"> Contact Us </h1>
        </div>
        
        
        <form className="fo">
            <div className="form-row">
                <div className="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="form-group col-md-6">
                <label for="inputPassword4">Password</label>
                <input type="password" className="form-control" id="inputPassword4" />
                </div>
            </div>
            <div className="form-group">
                <label for="inputAddress">Address</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div className="form-group">
                <label for="inputAddress2">Address 2</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                <label for="inputCity">City</label>
                <input type="text" class="form-control" id="inputCity" />
                </div>
                <div className="form-group col-md-4">
                <label for="inputState">State</label>
                <select id="inputState" className="form-control">
                    <option selected>Choose...</option>
                    <option>Varanasi</option>
                    <option>New Delhi</option>
                    <option>Mumbai</option>
                    <option>Kolkata</option>
                </select>
                </div>
                <div className="form-group col-md-2">
                <label for="inputZip">Zip</label>
                <input type="text" className="form-control" id="inputZip" />
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
        

        <footer className="al">
        {/* <p id="p" className="float-right"><a href="#">Back to top</a></p> */}
        <p className="float-left">© 2020-2021 AnkitTech, Inc.</p>
        </footer>
        </>
    );
};

export default Contact;