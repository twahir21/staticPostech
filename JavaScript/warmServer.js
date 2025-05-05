document.addEventListener("load", async () => {
    const start = Date.now();

    try {
        const request = await fetch("https://api.mypostech.store/", {
            credentials: 'include',
            headers: {
                'Accept-Language': "sw"
            }
        });

        const data = await request.json();

        if (!request.ok || !data.success) {
            console.error(data.message || "Seva imeshindwa kuleta majibu mazuri")
        }

        console.log(data);
        console.log("⏱️ Warm-up took:", Date.now() - start, "ms");

    } catch (err) {
        const res = err instanceof Error ? err.message : "Seva imezingua";
        console.error(res);
    }
});
