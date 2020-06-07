
const fetchPublicKey = async () => {
    return (await fetch('https://localhost:8443/keys/public')).text()
}


