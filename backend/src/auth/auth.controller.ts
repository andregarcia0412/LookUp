import { Body, Controller, HttpCode, HttpStatus, Post, Res } from '@nestjs/common';
import { SignInDto } from './dto/sign-in.dto';
import { AuthService } from './auth.service';
// import type {Response}  from 'express'

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    @HttpCode(HttpStatus.OK)
    @Post('sign-in')
    async signIn(
        @Body() signInDto: SignInDto,
        // @Res({passthrough: true}) res: Response
    ){
        return this.authService.signIn(signInDto) //decidir se armazeno o token em localstorage ou em cookie
        // const authResponse = await this.authService.signIn(signInDto);
        // const {token, expiresIn} = authResponse

        // res.cookie('auth-token', token, {
        //     httpOnly: true, //colocar o secure em produção
        //     sameSite: 'strict',
        //     path: '/',
        //     maxAge: expiresIn * 1000
        // })

        // return{expiresIn: expiresIn}
    }
}
