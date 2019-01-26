import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Form, FormGroup, Label, Input, FormText } from 'reactstrap';
class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            OnchageLogin:"",
            OnchagePassword:"",
            AcceptAutor:"",
            UnAcceptAutor:"",
            PropsForProfile: false,
            modal: false,
            RegisterLogin: "",
            RegisterPassword: "",
            UnSaccessing: null,
            Saccessing: null
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
          modal: !this.state.modal
        });
        this.setState({UnSaccessing:null});
        this.setState({Saccessing:null});
    }
    componentDidMount(){

    }
    changeInputLogin(e){
        this.setState({OnchageLogin:e.target.value});
    }
    changeInputPassword(e){
        this.setState({OnchagePassword:e.target.value});
    }
    Autorizeytion(e){
        var boolForLog = false;
        var boolForpass = false;
        var Users_In_App_js = this.props.users;

        Users_In_App_js.map((index)=>{
            if(index.Login === this.state.OnchageLogin){
                boolForLog = true;
            }
            if(index.Password === this.state.OnchagePassword){
                boolForpass = true;
            }
        })
        
        if(boolForLog === true && boolForpass === true){
            var Accept = this.state.OnchageLogin + " вы авторизовались!!"
            this.setState({AcceptAutor:Accept});
            this.setState({UnAcceptAutor:null});
            this.props.funct();
        } else{
            var UnAccept = "пользователя с именем " + this.state.OnchageLogin + " не существует :("
            this.setState({UnAcceptAutor:UnAccept});
            this.setState({AcceptAutor:null});
        }
    }
    RegisterLogin(e){
        this.setState({RegisterLogin:e.target.value});
        console.log(this.state.RegisterLogin);
    }
    RegisterPassword(e){
        this.setState({RegisterPassword:e.target.value});
        console.log(this.state.RegisterPassword);
    }
    RegistSuccess(){
        var boolen = true;
        var All_Users = this.props.users;
        All_Users.map((index)=>{
            if(this.state.RegisterLogin === index.Login){
                var Unsuccessing = "имя занято";
                this.setState({UnSaccessing:Unsuccessing});
                this.setState({Saccessing:null});
                boolen = false;
                console.log("lll")
            }
        })
        if(boolen === true){
            var NewUser = {
                Login: this.state.RegisterLogin,
                Password: this.state.RegisterPassword
            }
            this.props.users.push(NewUser);
            var saccessing = "вы зарегистрировались!"
            this.setState({Saccessing:saccessing});
            this.setState({UnSaccessing:null});
        }
    }
    render(){
        return(
            <div>
                <div className="input-block">
                    <input className="input" type="text" onChange={(e)=>this.changeInputLogin(e)} value={this.state.OnchageLogin} placeholder="Введите имя"></input>
                    <input className="input" type="password" onChange={(e)=>this.changeInputPassword(e)} value={this.state.OnchagePassword} placeholder="Введите пароль"></input>
                    <Button className="temp-sorry" color="success"  onClick={(e)=>this.Autorizeytion(e)}>нажите для авторизации</Button> <br></br>
                    <div className="Accept-bar">
                        {this.state.AcceptAutor}
                        {this.state.UnAcceptAutor}
                    </div>
                </div>
                
                <div>
                    <Button color="danger" style={{marginTop:'50px'}} onClick={this.toggle}>
                        PRESS TO REGIST
                    </Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>
                            Registration bar
                        </ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                    <Label for="exampleEmail">Login</Label><br/><br/>
                                    <Input type="text" name="email" id="exampleEmail" onChange={(e)=>this.RegisterLogin(e)} value={this.state.RegisterLogin} placeholder="login">
                                    </Input> <br/> <br/>
                                    <Label for="examplePassword">Password</Label><br/><br/>
                                    <Input type="password" name="email" id="exampleEmail" onChange={(e)=>this.RegisterPassword(e)} value={this.state.RegisterPassword} placeholder="pass">
                                    </Input>
                                </FormGroup>
                            </Form>
                            {this.state.UnSaccessing}
                            {this.state.Saccessing}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={(e)=>this.RegistSuccess(e)} >Register</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>cansel</Button>
                            <Button color="link">say</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        )
    }
}
export default LoginForm;