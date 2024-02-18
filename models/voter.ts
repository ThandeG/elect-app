//To define a voter object
export interface Voter {
    user_id: string,
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    hasVoted: boolean,
}