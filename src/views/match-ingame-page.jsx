import React from 'react'

import { Helmet } from 'react-helmet'

import SummonerProfileComponent from '../components/summoner-profile-component'
import MatchIngameComponent from '../components/in-game/match-ingame-component'
import '../styles/match-ingame-page.css'
import PropTypes from "prop-types";

const MatchIngamePage = () => {
  return (
    <div className="match-ingame-page-container">
      <Helmet>
        <title>인게임 조회</title>
      </Helmet>
      <SummonerProfileComponent/>
      <MatchIngameComponent ingame={mockIngame}/>
    </div>
  )
}

const mockIngame = { //TODO 제거
    "mapId": 11,
    "queueType": {
        "id": 440,
        "name": "자유랭크"
    },
    "teams": [
        {
            "teamCode": "BLUE",
            "participants": [
                {
                    "summoner": {
                        "profileImageUrl": "https://ddragon.leagueoflegends.com/cdn/13.16.1/img/profileicon/5735.png",
                        "name": "옥포동텐하흐",
                        "id": "ekrkKT41PrXQMSNLc2UNxaM9nvDaraILFEtByvXAHdB9R4Q",
                        "puuid": "rD86UigFHDtllY_Z2HZpFAlWi-Mn78IQxglymayJHqhOSVsh-CVpBGUZalXVtJC2EMEk_vCOsA208g",
                        "summonerLevel": 363,
                        "rank": [
                            {
                                "queueType": "RANKED_FLEX_SR",
                                "rank": "III",
                                "tier": "SILVER",
                                "leaguePoints": 45
                            },
                            {
                                "queueType": "RANKED_SOLO_5x5",
                                "rank": "II",
                                "tier": "PLATINUM",
                                "leaguePoints": 78
                            }
                        ],
                        "userRatingAverage": 0.0
                    },
                    "championStatistic": {
                        "totalMatches": 0,
                        "wins": 0,
                        "winRate": 0.0
                    },
                    "summonerName": "옥포동텐하흐",
                    "summonerId": "ekrkKT41PrXQMSNLc2UNxaM9nvDaraILFEtByvXAHdB9R4Q",
                    "spell1ImageUrl": "https://ddragon.leagueoflegends.com/cdn/13.16.1/img/spell/SummonerFlash.png",
                    "spell2ImageUrl": "https://ddragon.leagueoflegends.com/cdn/13.16.1/img/spell/SummonerTeleport.png",
                    "championImageUrl": "https://ddragon.leagueoflegends.com/cdn/13.16.1/img/champion/Zed.png"
                },
                {
                    "summoner": {
                        "profileImageUrl": "https://ddragon.leagueoflegends.com/cdn/13.16.1/img/profileicon/4655.png",
                        "name": "연구관 파이터",
                        "id": "sQc1c3F8PE3U0qe7Fed_UZut6YuzlVGMa7XkunsBm2bjjqo",
                        "puuid": "AkR4uRahYm1r6rs3uA8vMkc2IUraptKo-HiCCTK5Yz1nK6SJZkMfhOg-TmwSvR_DjSKQYlovLVCjVA",
                        "summonerLevel": 417,
                        "rank": [
                            {
                                "queueType": "RANKED_FLEX_SR",
                                "rank": "III",
                                "tier": "SILVER",
                                "leaguePoints": 32
                            },
                            {
                                "queueType": "CHERRY",
                                "rank": null,
                                "tier": null,
                                "leaguePoints": 0
                            },
                            {
                                "queueType": "RANKED_SOLO_5x5",
                                "rank": "III",
                                "tier": "GOLD",
                                "leaguePoints": 45
                            }
                        ],
                        "userRatingAverage": 0.0
                    },
                    "championStatistic": {
                        "totalMatches": 0,
                        "wins": 0,
                        "winRate": 0.0
                    },
                    "summonerName": "연구관 파이터",
                    "summonerId": "sQc1c3F8PE3U0qe7Fed_UZut6YuzlVGMa7XkunsBm2bjjqo",
                    "spell1ImageUrl": "https://ddragon.leagueoflegends.com/cdn/13.16.1/img/spell/SummonerFlash.png",
                    "spell2ImageUrl": "https://ddragon.leagueoflegends.com/cdn/13.16.1/img/spell/SummonerDot.png",
                    "championImageUrl": "https://ddragon.leagueoflegends.com/cdn/13.16.1/img/champion/Quinn.png"
                },
                {
                    "summoner": {
                        "profileImageUrl": "https://ddragon.leagueoflegends.com/cdn/13.16.1/img/profileicon/5271.png",
                        "name": "머리뽀개는놈",
                        "id": "zCOJNxfx0mqPvVVl86bNe7dFndEgh_kXy0T43nzKmtSZnGQ",
                        "puuid": "BRzuBxo46rv6yjYuPGgBEuGiAaqeQetNb7vUDexFsK6b6EME7dF0H831v0f_IP8Wh5AkFRTmIAN7IA",
                        "summonerLevel": 382,
                        "rank": [
                            {
                                "queueType": "RANKED_FLEX_SR",
                                "rank": "III",
                                "tier": "GOLD",
                                "leaguePoints": 79
                            },
                            {
                                "queueType": "RANKED_SOLO_5x5",
                                "rank": "II",
                                "tier": "GOLD",
                                "leaguePoints": 16
                            }
                        ],
                        "userRatingAverage": 0.0
                    },
                    "championStatistic": {
                        "totalMatches": 0,
                        "wins": 0,
                        "winRate": 0.0
                    },
                    "summonerName": "머리뽀개는놈",
                    "summonerId": "zCOJNxfx0mqPvVVl86bNe7dFndEgh_kXy0T43nzKmtSZnGQ",
                    "spell1ImageUrl": "https://ddragon.leagueoflegends.com/cdn/13.16.1/img/spell/SummonerFlash.png",
                    "spell2ImageUrl": "https://ddragon.leagueoflegends.com/cdn/13.16.1/img/spell/SummonerBoost.png",
                    "championImageUrl": "https://ddragon.leagueoflegends.com/cdn/13.16.1/img/champion/Draven.png"
                },
                {
                    "summoner": {
                        "profileImageUrl": "https://ddragon.leagueoflegends.com/cdn/13.16.1/img/profileicon/4862.png",
                        "name": "rrdeed",
                        "id": "smmTe2rXOonHgG-A7Tl8rrrUSjhj3xHhz0UlasJrBjGI690",
                        "puuid": "rc9M8PK4vF_ZHYTTJyIeHNWHq8ehYTpJ3kCNdHmkL9KoI9o6qmaRkyDzj6ecP8C5cUiFEQ2vE6anoQ",
                        "summonerLevel": 200,
                        "rank": [
                            {
                                "queueType": "RANKED_SOLO_5x5",
                                "rank": "III",
                                "tier": "SILVER",
                                "leaguePoints": 33
                            },
                            {
                                "queueType": "RANKED_FLEX_SR",
                                "rank": "Unranked",
                                "tier": "",
                                "leaguePoints": 0
                            }
                        ],
                        "userRatingAverage": 0.0
                    },
                    "championStatistic": {
                        "totalMatches": 0,
                        "wins": 0,
                        "winRate": 0.0
                    },
                    "summonerName": "rrdeed",
                    "summonerId": "smmTe2rXOonHgG-A7Tl8rrrUSjhj3xHhz0UlasJrBjGI690",
                    "spell1ImageUrl": "https://ddragon.leagueoflegends.com/cdn/13.16.1/img/spell/SummonerDot.png",
                    "spell2ImageUrl": "https://ddragon.leagueoflegends.com/cdn/13.16.1/img/spell/SummonerFlash.png",
                    "championImageUrl": "https://ddragon.leagueoflegends.com/cdn/13.16.1/img/champion/Nautilus.png"
                },
                {
                    "summoner": {
                        "profileImageUrl": "https://ddragon.leagueoflegends.com/cdn/13.16.1/img/profileicon/5435.png",
                        "name": "꼴에고수",
                        "id": "68fsUwL9yxY6_EjNH_MX8HSaRxXuq8IIZPcDzYI0EN7h5w",
                        "puuid": "BCJCTjujTNEnPTJU4knMgZZ_eSVtIfEJL3qPJHyYnM5sN1XIYVAANjHK4C7TLwlin-0iB3wiQkUD7w",
                        "summonerLevel": 350,
                        "rank": [
                            {
                                "queueType": "RANKED_SOLO_5x5",
                                "rank": "III",
                                "tier": "BRONZE",
                                "leaguePoints": 61
                            },
                            {
                                "queueType": "RANKED_FLEX_SR",
                                "rank": "IV",
                                "tier": "SILVER",
                                "leaguePoints": 45
                            }
                        ],
                        "userRatingAverage": 0.0
                    },
                    "championStatistic": {
                        "totalMatches": 0,
                        "wins": 0,
                        "winRate": 0.0
                    },
                    "summonerName": "꼴에고수",
                    "summonerId": "68fsUwL9yxY6_EjNH_MX8HSaRxXuq8IIZPcDzYI0EN7h5w",
                    "spell1ImageUrl": "https://ddragon.leagueoflegends.com/cdn/13.16.1/img/spell/SummonerFlash.png",
                    "spell2ImageUrl": "https://ddragon.leagueoflegends.com/cdn/13.16.1/img/spell/SummonerSmite.png",
                    "championImageUrl": "https://ddragon.leagueoflegends.com/cdn/13.16.1/img/champion/Belveth.png"
                }
            ]
        },
        {
            "teamCode": "RED",
            "participants": [
                {
                    "summoner": {
                        "profileImageUrl": "https://ddragon.leagueoflegends.com/cdn/13.16.1/img/profileicon/5799.png",
                        "name": "짠 등짠",
                        "id": "szfFQucUP_ukcSbmTw4uxqHxF2Q78mMV5T8cUI-vqHBZnHo",
                        "puuid": "MjAXzkkdmwBdxFwicPviAVXebFNO36tr_UgH5Dv4GGAbpmByYifynfT-RpXg6iHWhUPhvjD6wQVxgQ",
                        "summonerLevel": 168,
                        "rank": [
                            {
                                "queueType": "RANKED_FLEX_SR",
                                "rank": "I",
                                "tier": "IRON",
                                "leaguePoints": 80
                            },
                            {
                                "queueType": "CHERRY",
                                "rank": null,
                                "tier": null,
                                "leaguePoints": 0
                            },
                            {
                                "queueType": "RANKED_SOLO_5x5",
                                "rank": "III",
                                "tier": "GOLD",
                                "leaguePoints": 26
                            }
                        ],
                        "userRatingAverage": 0.0
                    },
                    "championStatistic": {
                        "totalMatches": 0,
                        "wins": 0,
                        "winRate": 0.0
                    },
                    "summonerName": "짠 등짠",
                    "summonerId": "szfFQucUP_ukcSbmTw4uxqHxF2Q78mMV5T8cUI-vqHBZnHo",
                    "spell1ImageUrl": "https://ddragon.leagueoflegends.com/cdn/13.16.1/img/spell/SummonerDot.png",
                    "spell2ImageUrl": "https://ddragon.leagueoflegends.com/cdn/13.16.1/img/spell/SummonerFlash.png",
                    "championImageUrl": "https://ddragon.leagueoflegends.com/cdn/13.16.1/img/champion/Thresh.png"
                },
                {
                    "summoner": {
                        "profileImageUrl": "https://ddragon.leagueoflegends.com/cdn/13.16.1/img/profileicon/3379.png",
                        "name": "빌어먹을휴면계정",
                        "id": "W9j_BK2m9-XVBWHs0KdbBvMUEhXJNXqIJHVNwyZZSIHeWAI",
                        "puuid": "xfCt7j0pSudojEos33QcwvvojDLVirbH2nqQLik5Er55I_F5rMYgTnW8fpCvQnwtvUFrl-vtNPdQOQ",
                        "summonerLevel": 93,
                        "rank": [
                            {
                                "queueType": "RANKED_SOLO_5x5",
                                "rank": "III",
                                "tier": "GOLD",
                                "leaguePoints": 57
                            },
                            {
                                "queueType": "RANKED_FLEX_SR",
                                "rank": "IV",
                                "tier": "GOLD",
                                "leaguePoints": 44
                            }
                        ],
                        "userRatingAverage": 0.0
                    },
                    "championStatistic": {
                        "totalMatches": 0,
                        "wins": 0,
                        "winRate": 0.0
                    },
                    "summonerName": "빌어먹을휴면계정",
                    "summonerId": "W9j_BK2m9-XVBWHs0KdbBvMUEhXJNXqIJHVNwyZZSIHeWAI",
                    "spell1ImageUrl": "https://ddragon.leagueoflegends.com/cdn/13.16.1/img/spell/SummonerTeleport.png",
                    "spell2ImageUrl": "https://ddragon.leagueoflegends.com/cdn/13.16.1/img/spell/SummonerFlash.png",
                    "championImageUrl": "https://ddragon.leagueoflegends.com/cdn/13.16.1/img/champion/DrMundo.png"
                },
                {
                    "summoner": {
                        "profileImageUrl": "https://ddragon.leagueoflegends.com/cdn/13.16.1/img/profileicon/4658.png",
                        "name": "풍년농장",
                        "id": "gL3w4ehvoDyUYuhDPr93f2vnNWfJeKeqrdeaMnVEBHgubWs",
                        "puuid": "dF_gB7fyxXrNTJUQpQa5Hw-icZ48UVZ_vN12_InKamHN7XR67FmSFZ2D_GVfkj5Wl1g2vNkUMRVV1g",
                        "summonerLevel": 269,
                        "rank": [
                            {
                                "queueType": "RANKED_SOLO_5x5",
                                "rank": "III",
                                "tier": "SILVER",
                                "leaguePoints": 75
                            },
                            {
                                "queueType": "CHERRY",
                                "rank": null,
                                "tier": null,
                                "leaguePoints": 0
                            }
                        ],
                        "userRatingAverage": 0.0
                    },
                    "championStatistic": {
                        "totalMatches": 0,
                        "wins": 0,
                        "winRate": 0.0
                    },
                    "summonerName": "풍년농장",
                    "summonerId": "gL3w4ehvoDyUYuhDPr93f2vnNWfJeKeqrdeaMnVEBHgubWs",
                    "spell1ImageUrl": "https://ddragon.leagueoflegends.com/cdn/13.16.1/img/spell/SummonerSmite.png",
                    "spell2ImageUrl": "https://ddragon.leagueoflegends.com/cdn/13.16.1/img/spell/SummonerFlash.png",
                    "championImageUrl": "https://ddragon.leagueoflegends.com/cdn/13.16.1/img/champion/Khazix.png"
                },
                {
                    "summoner": {
                        "profileImageUrl": "https://ddragon.leagueoflegends.com/cdn/13.16.1/img/profileicon/1644.png",
                        "name": "지 옹",
                        "id": "L-BCmuPQdhpJm99KFz6C_MCJI6wjuXckkXYLsWrJI6TcAA",
                        "puuid": "jcZ-dGercjk8XKW0-tmcw3goT8tZrM1pQTH4OJtcRBz20PiBB6oRldsgriOGGU-m-YRqYEDVVJ_t2g",
                        "summonerLevel": 319,
                        "rank": [
                            {
                                "queueType": "RANKED_SOLO_5x5",
                                "rank": "IV",
                                "tier": "EMERALD",
                                "leaguePoints": 0
                            },
                            {
                                "queueType": "RANKED_FLEX_SR",
                                "rank": "III",
                                "tier": "SILVER",
                                "leaguePoints": 43
                            }
                        ],
                        "userRatingAverage": 0.0
                    },
                    "championStatistic": {
                        "totalMatches": 0,
                        "wins": 0,
                        "winRate": 0.0
                    },
                    "summonerName": "지 옹",
                    "summonerId": "L-BCmuPQdhpJm99KFz6C_MCJI6wjuXckkXYLsWrJI6TcAA",
                    "spell1ImageUrl": "https://ddragon.leagueoflegends.com/cdn/13.16.1/img/spell/SummonerHeal.png",
                    "spell2ImageUrl": "https://ddragon.leagueoflegends.com/cdn/13.16.1/img/spell/SummonerFlash.png",
                    "championImageUrl": "https://ddragon.leagueoflegends.com/cdn/13.16.1/img/champion/Caitlyn.png"
                },
                {
                    "summoner": {
                        "profileImageUrl": "https://ddragon.leagueoflegends.com/cdn/13.16.1/img/profileicon/5431.png",
                        "name": "집에없는호치케스",
                        "id": "LvnFV5IGWtArqHBKOfnIhWAhfh34XG6rpdkvCs58x_1nXcbBzECtUF5rIQ",
                        "puuid": "ASPPd6VmoEb8Ll0i9XyM75lfeMCFjT1pGTcQQr9KAO09myYbaWX7o870ucGr-YLnLfn2aD0NDTrj_Q",
                        "summonerLevel": 34,
                        "rank": [
                            {
                                "queueType": "CHERRY",
                                "rank": null,
                                "tier": null,
                                "leaguePoints": 0
                            },
                            {
                                "queueType": "RANKED_FLEX_SR",
                                "rank": "IV",
                                "tier": "GOLD",
                                "leaguePoints": 54
                            },
                            {
                                "queueType": "RANKED_SOLO_5x5",
                                "rank": "III",
                                "tier": "BRONZE",
                                "leaguePoints": 47
                            }
                        ],
                        "userRatingAverage": 0.0
                    },
                    "championStatistic": {
                        "totalMatches": 0,
                        "wins": 0,
                        "winRate": 0.0
                    },
                    "summonerName": "집에없는호치케스",
                    "summonerId": "LvnFV5IGWtArqHBKOfnIhWAhfh34XG6rpdkvCs58x_1nXcbBzECtUF5rIQ",
                    "spell1ImageUrl": "https://ddragon.leagueoflegends.com/cdn/13.16.1/img/spell/SummonerFlash.png",
                    "spell2ImageUrl": "https://ddragon.leagueoflegends.com/cdn/13.16.1/img/spell/SummonerDot.png",
                    "championImageUrl": "https://ddragon.leagueoflegends.com/cdn/13.16.1/img/champion/Riven.png"
                }
            ]
        }
    ],
    "gameLength": "16:29"
}

MatchIngamePage.propTypes = {
    ingame: PropTypes.instanceOf
}

export default MatchIngamePage
