import { useHttp } from "../hooks/http.hook";

const useMockService = () => {

    const { loading, request, error, clearError } = useHttp();

    const _apiBase = "https://63e656b27eef5b223383cd98.mockapi.io/";

    const getAllProjects = async () => {
        const res = await request(`${_apiBase}project`);
        return res;
    }

    const getSingleProject = async (id) => {
        const res = await request(`${_apiBase}project/${id}`);
        return res;
    }

    // const _transformPorject = (project) => {
    //     return {
    //         id: project.id,
    //         title: project.title,
    //         skills: project.skills,
    //         img: project.img,
    //         imgBig: project.imgBig,
    //         gitHubLink: project.gitHubLink
    //     }
    // }

    return {loading, error, clearError, getAllProjects, getSingleProject};
}

export default useMockService;