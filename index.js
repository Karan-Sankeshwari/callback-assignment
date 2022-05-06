heading = document.querySelector("#text-display")
heading.innerText = "hello"

setTimeout(() => {
    heading.innerText = "10"
    setTimeout(() => {
        heading.innerText = "9"
        setTimeout(() => {
            heading.innerText = "8"
            setTimeout(() => {
                heading.innerText = "7"
                setTimeout(() => {
                    heading.innerText = "6"
                    setTimeout(() => {
                        heading.innerText = "5"
                        setTimeout(() => {
                            heading.innerText = "4"
                            setTimeout(() => {
                                heading.innerText = "3"
                                setTimeout(() => {
                                    heading.innerText = "2"
                                    setTimeout(() => {
                                        heading.innerText = "1"
                                        setTimeout(() => {
                                            heading.innerText = "Happy Independence Day"
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);