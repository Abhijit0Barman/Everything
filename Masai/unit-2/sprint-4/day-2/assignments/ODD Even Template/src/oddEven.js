function getData(data) {
    const pro = new Promise((resolve, reject) => {
        let type = typeof(data)

        if (type !== "string") {
            if (data % 2 == 0) {
                setTimeout(() => {
                    resolve("even")
                }, 2000);
            }
            else {
                setTimeout(() => {
                    resolve("odd")
                }, 4000);
            }
        }
        else {
            reject(error)
        }
    }).then((data) => { return (data) })
      .catch((error) => { return error })
}

export default getData
