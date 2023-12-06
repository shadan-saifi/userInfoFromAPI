import { useState } from "react";
import useInfoUser from "../hooks/useInfoUser";
import useInfoProfile from "../hooks/useInfoProfile";
import UserInfo from "./UserInfo";

function InputBox() {
    const [ids, setIds] = useState();
    const [user, error, loading] = useInfoUser(ids);
    const [user2, error2, loading2] = useInfoProfile(ids);
    const [response, setResponse] = useState("");
    const [response2, setResponse2] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const getData = () => {
        setResponse(user);
        setResponse2(user2);

    };

    const handleInputChange = (e) => {
        const inputVal = e.target.value;
        setIds(Number(inputVal));

        if (inputVal && parseInt(inputVal) > 30) {
            setErrorMessage("Please enter a number less than 31");
        } else {
            setErrorMessage("");
        }
    };

    return (
        <div>
            <div className="flex justify-center">
                <div className="flex flex-col justify-center">
                    <label htmlFor="id" className="text-[1.2rem] max-w-[250px] p-2">Write id number to search</label>
                    <input
                        className="max-w-[250px] p-1 text-black"
                        type="text"
                        id='id'
                        placeholder="write here"
                        value={ids}
                        onChange={handleInputChange}
                    />
                </div>
                <button className="p-4 pt-12 text-[1.5rem] font-bold" onClick={getData}>Search</button>
            </div>
            <div className="m-1">
                {errorMessage ? (
                    <h2>{errorMessage}</h2>
                ) : response && response2 ? (
                    <UserInfo response={response} response2={response2} />
                ) : error ? (
                    <h2>Error occurred</h2>
                ) : loading ? (
                    <h2>Loading.....</h2>
                ) : (
                    <h2>No data found</h2>
                )}
            </div>

        </div>
    )
}

export default InputBox;
