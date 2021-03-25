type ICreate = {
    course: string,
    time: number;
    educator: string
}

class CreateCourseService {
    execute({
        course,
        time,
        educator
    }: ICreate) {
        console.log(course, time, educator)
    };
}

export default new CreateCourseService();