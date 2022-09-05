import styled from 'styled-components'


const Background = styled.div`
    background-color: #fff;
`

const LoginWrapper = styled(Background)`
    background-color: ${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    .login {
        padding: 20px;
        width: 400px;
        height: 250px;
        .login-form-forgot {
            color: #1890ff;
            &:hover {
                opacity: 0.8;
                cursor: pointer;
            }
        }
    }
`

export { LoginWrapper }
