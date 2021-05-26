import React from 'react'
import styled from 'styled-components'
import photo from './Mingling.jpg'
import { Link } from 'react-router-dom'



const Login = (props) => {

        const { userName, password, submit, change } = props

        const onSubmit = evt => {
            evt.preventDefault()
            submit()
        }

        const onChange = evt => {
            const { userName , password } = evt.target
            change( userName, password )
        }

    return (

        <LoginDiv>
            <LoginImg src= { photo } alt = "People attending an event" />
            <InfoDiv>
                <h1>Enter your Username and Password.</h1>
                <form id = "login-form" onSubmit = {onSubmit}>
                    <label>
                        <h3>Username: </h3>
                        <input id = "userName" name = "userName" type = "text" onChange = {onChange} value = {userName} />
                    </label>
                    <label>
                        <h3>Password: </h3>
                        <input id = "password" name = "password" type = "text" onChange = {onChange} value = {password} />
                    </label>
                    <Link to = {`event-display`}>
                        <button id = "login-button">Submit</button>
                    </Link>
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
align-items: start;
padding: 5%;
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