import { UserType } from "./interfaces/UserType"

//Navigate.tsx
export const HOMEURL = '/'
export const PROFILEURL = '/profile'
export const ABOUTURL = '/about'
export const ERRORURL = '/errorComponent'
export const USERURL = '/:username'

//User.tsx
export const DEMOUSERDATA: UserType = {
    avatar_url: "https://avatars.githubusercontent.com/u/97114554?v=4",
    login: "Undefined",
    location: "Undefined",
    followers: 0,
    following: 0,
    bio: "Undefined",
    html_url: "Undefined",
    email: "Undefined"
}
export const CURRENTUSER = 'imrohitoberoi'

//GetUserDetails.tsx
export const FETCHUSERURL = 'https://api.github.com/users/'
