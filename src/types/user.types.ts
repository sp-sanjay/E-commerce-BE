interface UserRequest {
    name: string,
    avatar: File,
    email: string,
    password: string,
    _id: string,
    dob: Date,
    gender: string
}

export {
    UserRequest
}