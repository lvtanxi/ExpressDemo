export function resultHelp(res, error, datas = {}) {
    let data = {
        code: error ? 100 : 200,
        message: error ? error : "",
        results: datas
    }
    res.json(data)
}