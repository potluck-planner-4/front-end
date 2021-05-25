import React from 'react'
import styled from 'styled-components'
import photo from './Mingling.jpg'



const Login = (props) => {
        const { userName, password } = props
        const onSubmit = evt => {
            evt.preventDefault()
            onSubmit()
        }

    return (

        <LoginDiv>
            <LoginImg src= { photo } alt = "People attending an event" />
            <InfoDiv>
                <h1>Enter your Username and Password.</h1>
                <form id = "login-form" onSubmit = {onSubmit}>
                    <label>
                        <h3>Username: </h3>
                        <input id = "userName" name = "userName" type = "text" value = {userName} />
                    </label>
                    <label>
                        <h3>Password: </h3>
                        <input id = "password" name = "password" type = "text" value = {password} />
                    </label>
                    <button id = "login-button">Submit</button>
                </form>
            </InfoDiv>
        </LoginDiv>
    )
}

const LoginDiv = styled.div`
display: flex;
color: white;
background: black;
flex-direction: row;
justify-content: space-between;
align-items: center;
height: 100vh;
`

const LoginImg = styled.img`
width: 50%;
`

const InfoDiv = styled.div`
display: flex;
width: 50%;
flex-direction: column;
Justify-content: left;
align-items: center;
`

export default Login