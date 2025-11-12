import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInDto } from './dto/sign-in.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    
    constructor(private userService: UserService){}

    async signIn(signInDto: SignInDto){
        const user = await this.userService.findOneByEmail(signInDto.email)

        if(!user){            
            throw new UnauthorizedException('Invalid credentials')
        }

        const isRightPassword = await bcrypt.compare(signInDto.password, user.password)

        if(!isRightPassword){
            throw new UnauthorizedException('Invalid credentials')
        }
        return user
    }
}
