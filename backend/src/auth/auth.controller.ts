import { Body, Controller, Post } from '@nestjs/common';
import { SignInDto } from './dto/sign-in.dto'
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    @Post('sign-in')
    signIn(@Body() signInDto: SignInDto){
        return this.authService.signIn(signInDto)
    }
}
