import React from "react";

function UserInfo({ response, response2 }) {


    return (
        <div className="grid sm:grid-cols-2 grid-cols-1 grid-flow-row-dense">
            <div className="flex flex-col justify-start m-8">
                <div className="mb-6">
                    <h1 className="m-10 text-[1.5rem] font-bold">Name: {response.firstname} {response.lastname}</h1>
                    <h2>email: {response.email}</h2>
                    <div>DoB: {response.birthDate}</div>
                    <div>username:{response.login.username}</div>

                </div>
                <div className="mb-6">
                    <div className="mb-1">Address:</div>
                    <div>street: {response.address.street}</div>
                    <div>suit: {response.address.suit}</div>
                    <div>City: {response.address.city}</div>
                    <div>zipcode: {response.address.zipcode}</div>
                </div>
                <div className="mb-6">
                    <div className="mb-1">Contact:</div>
                    <div>Call: {response.phone}</div>
                    <div>Website: {response.website}</div>
                </div>
                <div>
                    <div className="mb-1">Company Information: </div>
                    <div>Name: {response.company.name}</div>
                    <div>{response.company.catchPhrase}</div>
                    <div>{response.company.bs}</div>
                </div>
            </div>
            <div>
                <div className="m-4">
                    <img src={response2.image} alt="" />
                </div>
                <div className="m-3">{response2.title}</div>
                <div className="m-3">Description: {response2.content}</div>
            </div>



        </div>
    )
}

export default UserInfo;