import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { Link, useHistory } from "react-router-dom"
import { Container, Grid, makeStyles } from "@material-ui/core"
import { useAuth } from "../../contexts/AuthContext";
import { background, color } from "../../helpers/constant";
import './Login.css'

const useStyles = makeStyles((theme) => ({

  size: {
    width: '50%',
    height: '50%',
    backgroundColor: background,
    color: color,
  },
  grid: {
    marginTop: 100
  },
  color: {
    color: color,
    textDecoration: 'none'
  },
  btn: {
    backgroundColor: color,
    width: '100px',
    height: '30px',
    border: 0
  }
}))

  const Login = () => {
  const classes = useStyles()

  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <Grid container justify="center" alignItems="center" className={classes.grid}>
      <Card className={classes.size}>
        <Card.Body>
          <h2 className="text-center mb-4" style={{display:'flex', justifyContent:'center'}}>Вход</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Grid container justify="center" align="center">
          <Form onSubmit={handleSubmit} >
          <div style={{display: 'block', width: '150px', textAlign: 'left'}}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>


            <Form.Group id="password">
              <Form.Label>Пароль</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
          </div>
            <Button disabled={loading} className={classes.btn} type="submit" style={{marginTop: '20px'}}>
              Войти
            </Button>
          </Form>
          </Grid>
        </Card.Body>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>

          <div className="w-100 text-center mt-3">
            <Link className={classes.color} to="/forgot-password"><h4>Забыли пароль?</h4></Link>
          </div>
      <div className="w-100 text-center mt-2">
        <Link className={classes.color} to="/signup"><h4>Нужен аккаунт? Регистрируйтесь</h4></Link>
      </div>
        </div>
      </Card>
    </Grid>
  )
}
export default Login;