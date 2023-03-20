import httpService from "./http.service";

const qualityEndpoint = "quality/";

const userService = {
    get: async () => {
        const { data } = await httpService.get(qualityEndpoint);
        return data;
    }
};

export default userService;
