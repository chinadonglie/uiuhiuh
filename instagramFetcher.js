const RAPIDAPI_KEY = "164ce828f7msh1a5b75320c73aefp17c6c9jsn1584369dde21"

async function getInstagramLink(username) {
  try {
    const form = new FormData()
    form.append("username_or_url", username)
    form.append("data", "profile")

    const res = await fetch(
      "https://instagram-scraper-stable-api.p.rapidapi.com/account_data_v2",
      {
        method: "POST",
        headers: {
          "x-rapidapi-key": RAPIDAPI_KEY,
          "x-rapidapi-host": "instagram-scraper-stable-api.p.rapidapi.com",
        },
        body: form,
      }
    )
    if (!res.ok) return null
    const json = await res.json()
    return json?.external_url || json?.data?.external_url || json?.user?.external_url || null
  } catch {
    return null
  }
}

module.exports = { getInstagramLink }
