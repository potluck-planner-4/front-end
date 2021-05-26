import React from 'react'
import styled from 'styled-components'

const AccountCreation = (props) => {

    const { userName, password } = props

    const onSubmit = evt => {
        evt.preventDefault()
        onSubmit()
    }
    
    return(
        <BodyDiv>
            <MainDiv>
                <h1>Thanks for choosing Potluck Planner!</h1>
                <h2>Please enter a username and password.</h2>
                <AccountBox>
                    <form id = "creation-form" onSubmit = {onSubmit}>
                        <label>
                            <h3>Username: </h3>
                            <input id = "userName" name = "userName" type = "text" value = {userName} />
                        </label>
                        <label>
                            <h3>Password: </h3>
                            <input id = "password" name = "password" type = "text" value = {password} />
                        </label>
                        <br/>
                        <br/>
                        <button id = "creation-button">Submit</button>
                    </form>
                </AccountBox>
            </MainDiv>
        </BodyDiv>
    )
}

const BodyDiv = styled.div`
background: black;
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
color: white;
justify-content: center;
border: 0;
`

const MainDiv = styled.div`
display: flex;
justify-content: start;
align-items: center;
flex-direction: column;
color: white;
width: 100%;
height: 100vh;
`

const AccountBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: white;
color: black;
height: 300px;
width: 300px;
border: 0 15%;
`

export default AccountCreation