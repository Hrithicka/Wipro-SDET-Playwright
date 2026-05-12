// omit<T>
interface OUser {
    uid: string;
    name: string;
    email: string;
    password: string;
}

type UserPreview = Omit<OUser, "email" | "password">

const preview: UserPreview = {
    name: "Hrithicka",
    uid: "xyz"
}

// preview.password;