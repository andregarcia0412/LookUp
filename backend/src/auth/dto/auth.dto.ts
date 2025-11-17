import { ReturnUserDto } from '../../user/dto/return-user.dto'

export class AuthResponseDto{
    token: string
    expiresIn: number
    user: ReturnUserDto

    constructor(user: ReturnUserDto, token: string, expiresIn:number){
        this.user = user
        this.token = token
        this.expiresIn = expiresIn
    }

}