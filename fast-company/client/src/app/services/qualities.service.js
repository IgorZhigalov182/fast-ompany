import httpService from "./http.service";

const qualityEndpoint = "quality/";

const userService = {
    fetchAll: async () => {
        const { data } = await httpService.get(qualityEndpoint);
        return data;
    }
};

export default userService;
