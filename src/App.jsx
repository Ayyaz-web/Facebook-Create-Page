import { useState } from 'react';
import './App.css';
import icon from './logoo.svg';
import eyeOpen from './eye.svg';
import eyeClosed from './eyeclosed.svg';

const App = () => {

    // For DOB section 
    const [days, setDays] = useState(Array.from({ length: 30 }, (_, i) => i + 1));
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const [years, setYears] = useState(Array.from({ length: 120 }, (_, i) => 1905 + i));

    const [showPassword, setShowPassword] = useState(false);


    const [signupData, setSignupData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        gender: "",
    });


    // for show label 

    // const [showLabel, setShowLabel] = useState(false);
    // const [counter, setCounter] = useState(0);

    // const handleFirstNameClick = () => {
    //     setShowLabel((prev) => !prev);
    //     setCounter((prev) => prev + 1);
    // };


    // const [showLa, setShowLa] = useState(false);
    // const [counte, setCounte] = useState(0);


    // const handleSureNameClick = () => {
    //     setShowLa((prev) => !prev);
    //     setCounte((prev) => prev + 1);

    // };

    // const [showLabe, setShowLabe] = useState(false);
    // const [count, setCount] = useState(0);


    // const handleEmailClick = () => {
    //     setShowLabe((prev) => !prev);
    //     setCount((prev) => prev + 1);
    // };


    // const [showLab, setShowLab] = useState(false);
    // const [coun, setCoun] = useState(0);


    // const handlePasswordClick = () => {
    //     setShowLab((prev) => !prev);
    //     setCoun((prev) => prev + 1);
    // };


// for show label 
    const useToggleCounter = () => {
        const [show, setShow] = useState(false);
        const [counter, setCounter] = useState(0);
      
        const handleClick = () => {
          setShow((prev) => !prev);
          setCounter((prev) => prev + 1);
        };
      
        return [show, handleClick, counter];
      };
      
    
      const [showLabel, handleFirstNameClick, counter1] = useToggleCounter();
      const [showLa, handleSureNameClick, counter2] = useToggleCounter();
      const [showLabe, handleEmailClick, counter3] = useToggleCounter();
      const [showLab, handlePasswordClick, counter4] = useToggleCounter();
      


// Signup Data 

    const signupForm = (e) => {
        const { name, value } = e.target;
        setSignupData({
            ...signupData,
            [name]: value,
        });
    }

    /*

    {
       name, fullname,
    },
    {
        "name": name,
        "fullname": fullname,
    }

    {
        "name": senpai,
        "age": 23,
    },

    {
        "name": senpai,
        "age": 24,
    }

    Array of object 

    [
        {
            [
                []
            ]
        },
        {

        }
    ]

    obj[0][0].le


    */

    // array = [1,2,3,4,5]
    //clg(...array) => 1, 2, 3, 4, 5

    const submitForm = (e) => {
        e.preventDefault();
        console.log(signupData);
        setSignupData({
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            gender: "",
        });
    }



    return (
        <div className="container">
            <p className='cross'> X </p>
            <div className='head'>
                <h1>Sign Up</h1>
                <p>It's quick and easy</p>

                <h3>
                    <hr />
                </h3>
            </div>


            <form onSubmit={submitForm} >
                {(!showLabel && counter1 > 1 && signupData.firstname === "") ? (
                    <img className='first' src={icon} alt="random" />
                ) : null}


                {(!showLa && counter2 > 1 && signupData.lastname === "") ? (
                    <img className='second' src={icon} alt="random" />
                ) : null}

                {(!showLabe && counter3 > 1 && signupData.email === "") ? (
                    <img className='third' src={icon} alt="random" />
                ) : null}

                {(!showLab && counter4 > 1 && signupData.password === "") ? (
                    <img className='fourth' src={icon} alt="random" />
                ) : null}







                <div className="new">
                    <div className='double'>
                        {(showLabel && counter1 > 1) ? (
                            <h5 className="input-label">What's your name? <span className='tri'></span> </h5>
                        ) : null}


                        <input
                            type="text"
                            name='firstname'
                            value={signupData.firstname}
                            placeholder='First Name'
                            required
                            onChange={signupForm}
                            onFocus={handleFirstNameClick}
                            onBlur={handleFirstNameClick}
                            className={`${!showLabel && counter1 > 1 && signupData.firstname === "" ? "input" : ""}`}
                        />


                        {(showLa && counter2 > 1) ? (
                            <h4 className="input-la">What's your name? <span className='tr'></span> </h4>
                        ) : null}

                        <input
                            type="text"
                            name='lastname'
                            value={signupData.lastname}
                            placeholder='Surname'
                            required
                            onChange={signupForm}
                            onFocus={handleSureNameClick}
                            onBlur={handleSureNameClick}
                            className={`${!showLa && counter2 > 1 && signupData.lastname === "" ? "input" : ""}`}

                        />
                    </div>


                    <div className='single'>

                        {(showLabe && counter3 > 1) ? (
                            <h3 className="input-labe">You'll use this when you log in and if you ever need <br /> to rest your password. <span className='tris'></span> </h3>
                        ) : null}


                        <input
                            type="email"
                            name='email'
                            value={signupData.email}
                            required
                            placeholder='Mobile number or email address'
                            onChange={signupForm}
                            onFocus={handleEmailClick}
                            onBlur={handleEmailClick}
                            className={`${!showLabe && counter3 > 1 && signupData.email === "" ? "input" : ""}`}

                        /> <br />


                        {(showLab && counter4 > 1) ? (
                            <h2 className="input-lab"> Enter a combination of at least six numbers, letters <br /> and punctuation marks (such as ! and &).  <span className='trise'></span> </h2>
                        ) : null}
                        <div className='paswrd'>
                            <img

                                src={showPassword ? eyeOpen : eyeClosed}
                                alt='random'
                                onClick={() => setShowPassword((prev) => !prev)}
                            />

                            <input
                                type={showPassword ? "text" : "password"}
                                name='password'
                                value={signupData.password}
                                placeholder='New password'
                                required
                                onChange={signupForm}
                                onFocus={handlePasswordClick}
                                onBlur={handlePasswordClick}
                                className={`${!showLab && counter4 > 1 && signupData.password === "" ? "input" : ""}`}
                            />
                        </div>
                    </div>

                    <div className='pd'>


                        <p>Date of birth <span className='check'> ? </span>  </p>

                        <div className="dob-section">
                            
                            <select className="dob-select" name="day" required onChange={signupForm}>
                                {days.map(day => (
                                    <option key={day} value={day}>{day}</option>
                                ))}
                            </select>


                         

                            <select className="dob-select" name="month" required onChange={signupForm} defaultValue={'Feb'}>

                                {months.map((month, index) => (
                                    <option key={index} value={month}>{month}</option>
                                ))}
                            </select>

                          
                            <select className="dob-select" name="year" required onChange={signupForm} defaultValue={2024}>

                                {years.map(year => (
                                    <option key={year} value={year}>{year}</option>

                                ))}
                            </select>
                        </div>
                    </div>



                    <div className='center'>

                        <p>Gender <span className='check'>  ? </span>  </p>



                        <div className='lab'>
                            <div className='cen'>
                                <label htmlFor="female" className='spa'> Female </label>
                                <input
                                    type="radio"
                                    id='female'
                                    name='gender'
                                    value='female'
                                    className='sp'
                                    onChange={signupForm}
                                />
                            </div>

                            <div className='cen'>
                                <label htmlFor="male" className='spa'> Male </label>
                                <input
                                    type="radio"
                                    id='male'
                                    name='gender'
                                    value='male'
                                    className='sp'
                                    onChange={signupForm}
                                />
                            </div>

                            <div className='cen'>
                                <label htmlFor="custom" className='spa'> Custom </label>
                                <input
                                    type="radio"
                                    id='custom'
                                    name='gender'
                                    value='custom'
                                    className='sp'
                                    onChange={signupForm}
                                />
                            </div>
                        </div>
                    </div>






                    <div className="para">
                        <p>People who use our service may have uploaded your contact information to <br /> Facebook. <a href="https://www.facebook.com/help/637205020878504">Learn more</a> .</p>
                        <p>By clicking Sign Up, you agree to our <a href="https://www.facebook.com/legal/terms/update">Terms,</a> <a href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0">Privacy Policy</a>  and <a href="https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0">Cookies Policy.</a>  <br /> You may receive SMS notifications from us and can opt out at any time.</p>
                    </div>

                    <div className='btn'>
                        <button type='submit' >Sign Up</button>
                    </div>







                </div>
            </form>
        </div>
    )
}

export default App;