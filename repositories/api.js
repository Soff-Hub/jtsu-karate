import repository from "./repository";

export const advantages = () => repository('advantage/')

export const advantageById = (id) => repository(`advantage/${id}`)

export const courses = () => repository('course/')

export const posts = () => repository('post/')

export const postById = (id) => repository(`post/${id}`)

export const gallery = () => repository('gallery/')

export const category = () => repository('category/')

export const socialLinks = () => repository('social_link/')
