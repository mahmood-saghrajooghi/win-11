import axios, { AxiosResponse } from "axios"

const getBookDetails = (id: string) => {
  return new Promise<ProductWithAddonDetails>((resolve, reject) => {
    axios.get<string, AxiosResponse<{ response: ProductWithAddonDetails }>>(`/products/${id}`)
      .then(res => {
        resolve(res.data.response)
      })
      .catch(err => {
        reject(err)
      })
  })
}

const getBookPages = (rangeStart: number, rangeEnd: number, bookUrlTemplate: string, cancelTimeout?: number) => {
  return new Promise<boolean>((resolve, reject) => {
    if (rangeStart > rangeEnd) reject('"Range Start" is bigger than "Range End"!')
    let i = rangeStart;
    const cancelTokenSource = axios.CancelToken.source();
    while (i <= rangeEnd) {
      axios.get("http://52.224.248.253:8080" + bookUrlTemplate.replace("$pageNumber", i.toString()), {
        cancelToken: cancelTokenSource.token
      }).then(res => { }).catch(err => {
        reject(err);
      })
      i++;
      console.log(i);
    }
    if (cancelTimeout) {
      setTimeout(() => {
        cancelTokenSource.cancel();
        resolve(true)
      }, cancelTimeout)
    }
  })
}

const bookServices = {
  get: getBookDetails,
  getPagesInRange: getBookPages
}

export default bookServices;