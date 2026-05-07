// ──────────────────────────────────────────────
// GTA VI 攻略站 — 简易 CMS 数据层
// 后续可替换为 Supabase / Notion API / Headless CMS
// ──────────────────────────────────────────────

const CMS = {

  // ── 主线任务
  missions: [
    { id: 1, chapter: 1, title: "逃出海湾", difficulty: "简单", reward: "$5,000", tags: ["剧情","开局"], desc: "故事开篇，操控 Lucia 逃离追捧。" },
    { id: 2, chapter: 1, title: "第一相遇", difficulty: "简单", reward: "$8,000", tags: ["剧情","双主角"], desc: "与 Jason 首次会面，建立合作关系。" },
    { id: 3, chapter: 2, title: "Vice City 欢迎你", difficulty: "中等", reward: "$15,000", tags: ["剧情","地图解锁"], desc: "进入 Vice City 主城区，建立新的情报网络。" },
    { id: 4, chapter: 2, title: "海滨的计划", difficulty: "中等", reward: "$22,000", tags: ["抢劫","策划"], desc: "策划首次大型抛劫行动。" },
    { id: 5, chapter: 3, title: "血色黄昏", difficulty: "困难", reward: "$50,000", tags: ["剧情","战斗"], desc: "与最大对手正面冲突，考验拍档战斗操作。" },
    { id: 6, chapter: 3, title: "Leonida 公路追逃", difficulty: "困难", reward: "$35,000", tags: ["车辆","追逃"], desc: "开车穿越 Leonida 派出的路障。" },
  ],

  // ── 角色
  characters: [
    {
      id: "jason",
      name: "Jason Duval",
      role: "男主角",
      icon: "🧍",
      tags: ["双主角","Leonida","犯罪山庄"],
      desc: "Jason 是一个成长于 Leonida 山区的年轻人，深巻局内紧张局势。与 Lucia 搭档，共同在 Vice City 闯荡。",
      stats: { 驾驶: 85, 射击: 78, 体力: 90, 追跑: 75 }
    },
    {
      id: "lucia",
      name: "Lucia Caminos",
      role: "女主角",
      icon: "🧍‍♀️",
      tags: ["双主角","Vice City","系列首位女主"],
      desc: "Lucia 是 GTA 系列第一位可操控女性主角。出生于拉丁裔经移民家庭，在屡屡逃享当中确立自己的地位。",
      stats: { 驾驶: 80, 射击: 92, 体力: 72, 追跑: 88 }
    }
  ],

  // ── 资讯
  news: [
    { id: 1, date: "2025-11-05", category: "官方公告", tag: "已确认", title: "GTA VI 正式定档 2026 年 11 月 19 日发售", summary: "Rockstar Games 公布游戏新发售日期，平台为 PS5 和 Xbox Series X|S。" },
    { id: 2, date: "2025-05-06", category: "Trailer", tag: "必看", title: "Trailer 2 正式发布，大量 Vice City 岞景曝光", summary: "暗示了更多免费漫游区域、天气系统与双主角动态切换机制。" },
    { id: 3, date: "2026-03-17", category: "角色资料", tag: "高热度", title: "Rockstar 官网上线 Lucia 独立角色页", summary: "首次公开展示 Lucia 的背景与性格主题，玩家反响热烈。" },
    { id: 4, date: "2026-04-29", category: "玩法机制", tag: "新内容", title: "新战斗系统曝光：俱卧、抓取与掩体机制详解", summary: "中等追跑 NPC 可被抓取并决定后续走向，战斗自由度大幅提升。" },
  ]

};
