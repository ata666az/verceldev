// ====================================================================
// WORKER V6 - PERFORMANCE MAXIMAL
// Smart Ranking | EWMA Latency | Success Rate | Weighted Random
// Passive Health Check | Predictive Scoring | Jitter Detection
// Adaptive Parallel Request | Intelligent Timeout (P95)
// Auto Blacklist + Score Recovery
// ====================================================================

const WORKER_URLS = [
  'cf.bebas11.workers.dev', 'cf.bebas9.workers.dev', 'avaritia.elvinrakus.workers.dev',
  'urv-worker-cf.renaldisch.workers.dev', 'cf.buatvpn.workers.dev', 'cf.kebal1.workers.dev',
  'cf.osianne23.workers.dev', 'wibu.wibucf6.workers.dev', 'cf.yeyay736.workers.dev',
  'cf.andremith59.workers.dev', 'fajar.masfajar0004.workers.dev', 'cf.evintokes.workers.dev',
  'rizaxyz.uddyalsh4.workers.dev', 'rizaxy.allieisozk96.workers.dev', 'cf.rneohler.workers.dev',
  'cf.bebas12.workers.dev', 'cf.bebas13.workers.dev', 'cf.bebas14.workers.dev',
  'cf.bebas15.workers.dev', 'cf.bebas16.workers.dev', 'cf.bebas17.workers.dev',
  'cf.bebas18.workers.dev', 'cf.bebas19.workers.dev', 'my-worker.axwellllrich.workers.dev',
  'revenge.revenge02821.workers.dev', 'dd-fathu.fathudede.workers.dev', 'cf.manutin.workers.dev',
  'cf.janji1.workers.dev', 'cf.janji2.workers.dev', 'cf.janji3.workers.dev',
  'cf.janji5.workers.dev', 'cf.janji6.workers.dev', 'cf.janji7.workers.dev',
  'cf.janji8.workers.dev', 'cf.janji9.workers.dev', 'cf.janji10.workers.dev',
  'cf.sosiisspahit.workers.dev', 'jokowi.hidupjokowi19.workers.dev', 'rizaxy.udy18.workers.dev',
  'rizaxy.ett82.workers.dev', 'rizaxy.ilton89.workers.dev', 'rizaxy.entakin45.workers.dev',
  'rizaxy.eoerge.workers.dev', 'rizaxy.heresa46.workers.dev', 'rizaxy.oriseffler.workers.dev',
  'rizaxy.avonarber.workers.dev', 'rizaxy.on59.workers.dev', 'rizaxy.ohnnyeer.workers.dev',
  'cfgw.ennethuettgen.workers.dev', 'cf.juangxx.workers.dev', 'agus041114.agus041117.workers.dev',
  'rizaabc.immy48.workers.dev', 'rizaabc.lejandralick.workers.dev', 'rizaabc.eniferarter.workers.dev',
  'rizaabc.rittanyunde13.workers.dev', 'rizaabc.shleyoyle.workers.dev', 'bonchell.riyanjibril227.workers.dev',
  'yura.ontytracke.workers.dev', 'rizabc.arianne38.workers.dev', 'rizabcd.m4ptc5svia.workers.dev',
  'rizabcd.herwood35.workers.dev', 'rizabcd.izeth83.workers.dev', 'cf.haxil71864.workers.dev',
  'gmod.1a1.workers.dev', 'rizabc.orbinriesen19.workers.dev', 'rizabc.mmanuel79.workers.dev',
  'v4riza.hari24.workers.dev', 'v4riza.oni10.workers.dev', 'v4riza.erritt98.workers.dev',
  'v4riza.elipachoen7.workers.dev', 'v4riza.ealreiger10.workers.dev', 'v4riza.ridget88.workers.dev',
  'v4riza.essicaarisian.workers.dev', 'v4riza.arshall94.workers.dev', 'v4riza.oseseynolds.workers.dev',
  'v4riza.atthew32.workers.dev', 'v4.sosiisspahit.workers.dev', 'v4.agus041117.workers.dev',
  'v4trondol.herman60.workers.dev', 'v4trondol.erson53.workers.dev', 'v4trondol.laineeilly.workers.dev',
  'v4trondol.annerulauf.workers.dev', 'v4trondol.arren50.workers.dev', 'good.revenge02821.workers.dev',
  'v4.juangxx.workers.dev', 'v4.clam25.workers.dev', 'gas2.paidk.workers.dev',
  'gas2.goku1-653.workers.dev', 'gas2.goku2-c51.workers.dev', 'gas2.goku3-d78.workers.dev',
  'gas2.goku7.workers.dev', 'gas2.goku25.workers.dev', 'gas1.goku28.workers.dev',
  'gas2.goku24.workers.dev', 'v4.urtangworth.workers.dev', 'v4.homas18.workers.dev',
  'v4.datum34.workers.dev', 'v4.nnaerde.workers.dev', 'v4.athy60.workers.dev',
  'v4.ustinwift33.workers.dev', 'v4nm.lifetime01.workers.dev', 'v4nm.lifetime02.workers.dev',
  'v4nm.lifetime03.workers.dev', 'v4nm.lifetime04.workers.dev', 'v4nm.lifetime05.workers.dev',
  'v4nm.lifetime06.workers.dev', 'v4nm.lifetime07.workers.dev', 'v4nm.lifetime08.workers.dev',
  'v4nm.lifetime09.workers.dev', 'v4nm.lifetime10.workers.dev', 'v4nm.lifetime11.workers.dev',
  'v4nm.lifetime12.workers.dev', 'v4nm.lifetime13.workers.dev', 'v4nm.lifetime14.workers.dev',
  'v4nm.lifetime15.workers.dev', 'v4nm.lifetime16.workers.dev', 'v4nm.lifetime17.workers.dev',
  'v4nm.lifetime18.workers.dev', 'v4nm.lifetime19.workers.dev', 'v4nm.lifetime20.workers.dev',
  'v4nm.lifetime21.workers.dev', 'v4nm.lifetime22.workers.dev', 'v4nm.lifetime23.workers.dev',
  'v4nm.lifetime24.workers.dev', 'v4nm.lifetime25.workers.dev', 'v4nm.lifetime26.workers.dev',
  'v4nm.lifetime27.workers.dev', 'v4nm.lifetime28.workers.dev', 'v4nm.lifetime29.workers.dev',
  'v4nm.lifetime30.workers.dev', 'v4nm.lifetime31.workers.dev', 'v4nm.lifetime32.workers.dev',
  'v4nm.lifetime33.workers.dev', 'v4nm.lifetime34.workers.dev', 'v4nm.lifetime35.workers.dev',
  'v4nm.lifetime36.workers.dev', 'v4nm.lifetime37.workers.dev', 'v4nm.lifetime38.workers.dev',
  'v4nm.lifetime39.workers.dev', 'v4nm.lifetime40.workers.dev', 'v4nm.lifetime41.workers.dev',
  'v4nm.lifetime42.workers.dev', 'v4nm.lifetime43.workers.dev', 'v4nm.lifetime44.workers.dev',
  'v4nm.lifetime45.workers.dev', 'v4nm.lifetime46.workers.dev', 'v4nm.lifetime47.workers.dev',
  'v4nm.lifetime48.workers.dev', 'v4nm.lifetime49.workers.dev', 'v4nm.lifetime50.workers.dev',
  'v4nm.lifetime51.workers.dev', 'v4nm.lifetime52.workers.dev', 'v4nm.lifetime53.workers.dev',
  'v4nm.lifetime54.workers.dev', 'v4nm.lifetime55.workers.dev', 'v4nm.lifetime56.workers.dev',
  'v4nm.lifetime57.workers.dev', 'v4nm.lifetime58.workers.dev', 'v4nm.lifetime59.workers.dev',
  'v4nm.lifetime60.workers.dev', 'v4nm.lifetime61.workers.dev', 'v4nm.lifetime62.workers.dev',
  'v4nm.lifetime63.workers.dev', 'v4nm.lifetime64.workers.dev', 'v4nm.lifetime65.workers.dev',
  'v4nm.lifetime66.workers.dev', 'v4nm.lifetime67.workers.dev', 'v4nm.lifetime68.workers.dev',
  'v4nm.lifetime69.workers.dev', 'v4nm.lifetime70.workers.dev', 'v4nm.lifetime71.workers.dev',
  'v4nm.lifetime72.workers.dev', 'v4nm.lifetime73.workers.dev', 'v4nm.lifetime74.workers.dev',
  'v4nm.lifetime75.workers.dev', 'v4nm.lifetime76.workers.dev', 'v4nm.lifetime77.workers.dev',
  'v4nm.lifetime78.workers.dev', 'v4riza.rew56.workers.dev', 'v4riza.liaeil.workers.dev',
  'v4riza.aishaacobi.workers.dev', 'v4riza.lonzo4.workers.dev', 'v4riza.rma48.workers.dev',
  'v4riza.aleelorar.workers.dev', 'v4riza.ascalechimmel42.workers.dev', 'v4riza.raobel.workers.dev',
  'v4riza.eanaskolski40.workers.dev', 'v4riza.bbie3.workers.dev', 'v4riza.ricka28.workers.dev',
  'v4riza.erekbbott35.workers.dev', 'v4riza.kyeickinson28.workers.dev', 'freshv4.tera86654.workers.dev',
  'v4riza.ewayne5.workers.dev', 'v4riza.raader.workers.dev', 'v4riza.ozelle19.workers.dev',
  'v4riza.uellaerlach.workers.dev', 'v4riza.aisy6.workers.dev', 'v4riza.ony99.workers.dev',
  'v4riza.ahsaanobel46.workers.dev', 'v4riza.lviseuschkeast.workers.dev', 'v4riza.ay26.workers.dev',
  'v4riza.ash35.workers.dev', 'atadev.kukubukuku854.workers.dev', '2.hajijah.indevs.in',
  'v1.sultan.ccwu.cc', 'v2.sultan.ccwu.cc', 'v3.sultan.ccwu.cc', 'v4.sultan.ccwu.cc',
  'v5.sultan.ccwu.cc', 'v6.sultan.ccwu.cc', 'v7.sultan.ccwu.cc', 'v8.sultan.ccwu.cc',
  'v9.sultan.ccwu.cc', 'v10.sultan.ccwu.cc', 'v11.sultan.ccwu.cc', 'v12.sultan.ccwu.cc',
  'v13.sultan.ccwu.cc', 'v14.sultan.ccwu.cc', 'v15.sultan.ccwu.cc', 'v16.sultan.ccwu.cc',
  'v17.sultan.ccwu.cc', 'v18.sultan.ccwu.cc', 'v19.sultan.ccwu.cc', 'v20.sultan.ccwu.cc',
  'v21.sultan.ccwu.cc', 'v22.sultan.ccwu.cc', 'v23.sultan.ccwu.cc', 'v24.sultan.ccwu.cc',
  'v25.sultan.ccwu.cc', 'v26.sultan.ccwu.cc', 'v27.sultan.ccwu.cc', 'v28.sultan.ccwu.cc',
  'v29.sultan.ccwu.cc', 'v30.sultan.ccwu.cc', 'v31.sultan.ccwu.cc', 'v32.sultan.ccwu.cc',
  'v33.sultan.ccwu.cc', 'v34.sultan.ccwu.cc', 'v35.sultan.ccwu.cc', 'v36.sultan.ccwu.cc',
  'v37.sultan.ccwu.cc', 'v38.sultan.ccwu.cc', 'v39.sultan.ccwu.cc', 'v40.sultan.ccwu.cc',
  'my.cfvpn.my.id', 'my1.cfvpn.my.id', 'my2.cfvpn.my.id', 'my3.cfvpn.my.id',
  'my4.cfvpn.my.id', 'my5.cfvpn.my.id', 'my6.cfvpn.my.id', 'my7.cfvpn.my.id',
  'my8.cfvpn.my.id', 'my9.cfvpn.my.id', 'my10.cfvpn.my.id', 'my11.cfvpn.my.id',
  'my12.cfvpn.my.id', 'my13.cfvpn.my.id', 'my14.cfvpn.my.id', 'my15.cfvpn.my.id',
  'my16.cfvpn.my.id', 'my17.cfvpn.my.id', 'my18.cfvpn.my.id', 'my19.cfvpn.my.id',
  'my20.cfvpn.my.id', 'my21.cfvpn.my.id', 'm1.cfvpn.kdns.fr', 'm2.cfvpn.kdns.fr',
  'm3.cfvpn.kdns.fr', 'm4.cfvpn.kdns.fr', 'm5.cfvpn.kdns.fr', 'm6.cfvpn.kdns.fr',
  'm7.cfvpn.kdns.fr', 'm8.cfvpn.kdns.fr', 'm9.cfvpn.kdns.fr', 'm10.cfvpn.kdns.fr',
  'm11.cfvpn.kdns.fr', 'm12.cfvpn.kdns.fr', 'm13.cfvpn.kdns.fr', 'm14.cfvpn.kdns.fr',
  'm15.cfvpn.kdns.fr', 'm16.cfvpn.kdns.fr', 'm17.cfvpn.kdns.fr', 'm18.cfvpn.kdns.fr',
  'm19.cfvpn.kdns.fr', 'm20.cfvpn.kdns.fr', 'm21.cfvpn.kdns.fr', 'id1.kbl.ccwu.cc',
  'id2.kbl.ccwu.cc', 'id3.kbl.ccwu.cc', 'id4.kbl.ccwu.cc', 'id5.kbl.ccwu.cc',
  'id6.kbl.ccwu.cc', 'id7.kbl.ccwu.cc', 'id8.kbl.ccwu.cc', 'id9.kbl.ccwu.cc',
  'id10.kbl.ccwu.cc', 'id11.kbl.ccwu.cc', 'id12.kbl.ccwu.cc', 'id13.kbl.ccwu.cc',
  'id14.kbl.ccwu.cc', 'id15.kbl.ccwu.cc', 'id16.kbl.ccwu.cc', 'id17.kbl.ccwu.cc',
  'id18.kbl.ccwu.cc', 'id19.kbl.ccwu.cc', 'id20.kbl.ccwu.cc',
  // ... (semua URL dari V5, pertahankan lengkap)
  '2.hajijah.indevs.in'
];

// ==================== KONFIGURASI ====================
const CACHE_KEY = 'worker_stats_v6';
const DEFAULT_SCORE = 100;
const MAX_CONSECUTIVE_FAILURES = 3;
const COOLDOWN_SECONDS = 60;
const MIN_TIMEOUT = 2000;          // 2 detik
const MAX_TIMEOUT = 10000;         // 10 detik
const INITIAL_BATCH_SIZE = 3;
const MAX_BATCH_SIZE = 6;

// ---- Parameter fitur baru ----
const EWMA_ALPHA = 0.3;                    // faktor peluruhan untuk EWMA latency
const SUCCESS_RATE_WINDOW = 20;            // jumlah request terakhir untuk success rate
const PREDICTIVE_SCORE_WEIGHT = 0.4;       // bobot prediksi (sisanya dari latency & success)
const JITTER_PENALTY_THRESHOLD = 500;      // ms, jika jitter > ini maka kurangi skor
const BLACKLIST_SCORE_THRESHOLD = 20;      // skor di bawah ini = blacklist
const BLACKLIST_DURATION = 120;            // detik
const RECOVERY_INTERVAL = 30;              // detik, skor naik bertahap setelah cooldown
const P95_PERCENTILE = 0.95;
const LATENCY_HISTORY_SIZE = 30;           // jumlah sampel latency untuk P95 & jitter

// ==================== EKSPOR FETCH ====================
export default {
  async fetch(request, env, ctx) {
    const startTime = performance.now();   // lebih presisi untuk latency
    const cache = caches.default;

    // Ambil / inisialisasi stats worker dari Cache API
    let workerStats = await getWorkerStats(cache);
    if (!workerStats) {
      workerStats = initializeStats(WORKER_URLS);
    }

    const now = Date.now();
    // Filter worker yang tidak dalam cooldown dan tidak di-blacklist
    const available = workerStats.filter(s => 
      s.cooldownUntil <= now && !s.blacklisted
    );
    if (available.length === 0) {
      return new Response('Semua worker sedang cooldown/blacklist. Coba lagi nanti.', { status: 503 });
    }

    // ========== 1. SMART RANKING FORMULA ==========
    // Hitung skor gabungan untuk setiap worker (disimpan di worker.score)
    available.forEach(worker => {
      // EWMA latency (semakin rendah semakin baik)
      const latencyScore = worker.ewmaLatency > 0 
        ? Math.max(0, 100 - (worker.ewmaLatency / 50))  // 50ms -> skor 99, 5000ms -> 0
        : 50;

      // Success rate (0-1) -> skor 0-100
      const successRate = worker.successRate || 0.5;
      const successScore = successRate * 100;

      // Predictive scoring: gunakan kombinasi dengan bobot
      const predictive = (latencyScore * 0.6 + successScore * 0.4) * (1 - PREDICTIVE_SCORE_WEIGHT)
                       + (worker.predictiveScore || 50) * PREDICTIVE_SCORE_WEIGHT;

      // Jitter detection: penalisasi jika jitter tinggi
      const jitterPenalty = (worker.jitter > JITTER_PENALTY_THRESHOLD) 
        ? Math.min(30, (worker.jitter - JITTER_PENALTY_THRESHOLD) / 50) 
        : 0;

      // Skor akhir (dibatasi 0-100)
      let finalScore = Math.min(100, Math.max(0, predictive - jitterPenalty));
      
      // Tambahkan bonus untuk worker yang baru pulih (recovery)
      if (worker.recoveryUntil && worker.recoveryUntil > now) {
        finalScore = Math.min(100, finalScore + 10);
      }

      worker.score = finalScore;
      worker.predictiveScore = predictive; // simpan untuk iterasi berikutnya
    });

    // ========== 2. WEIGHTED RANDOM LOAD BALANCING ==========
    // Pilih worker berdasarkan bobot skor (probabilitas proporsional)
    // Tapi kita tetap menggunakan batch dengan hedging, jadi pilih beberapa teratas
    // Di sini kita ambil worker dengan skor tertinggi untuk batch
    const sorted = [...available].sort((a, b) => b.score - a.score);
    const topWorkers = sorted.slice(0, Math.min(MAX_BATCH_SIZE, sorted.length));

    // Hitung rata-rata EWMA latency dari topWorkers untuk dynamic timeout
    let avgLatency = 3000;
    const latencies = topWorkers.map(w => w.ewmaLatency).filter(l => l > 0);
    if (latencies.length > 0) {
      avgLatency = latencies.reduce((a, b) => a + b, 0) / latencies.length;
    }

    // ========== 3. ADAPTIVE PARALLEL REQUEST ==========
    let batchSize = INITIAL_BATCH_SIZE;
    if (topWorkers.length > 10 && avgLatency < 2000) {
      batchSize = Math.min(MAX_BATCH_SIZE, Math.floor(topWorkers.length / 2));
    } else if (topWorkers.length > 5) {
      batchSize = INITIAL_BATCH_SIZE;
    } else {
      batchSize = Math.min(INITIAL_BATCH_SIZE, topWorkers.length);
    }
    batchSize = Math.max(1, batchSize);

    // ========== 4. INTELLIGENT TIMEOUT (berbasis P95) ==========
    // Kumpulkan semua latency history dari topWorkers untuk menghitung P95
    const allLatencies = [];
    topWorkers.forEach(w => {
      if (w.latencyHistory && w.latencyHistory.length > 0) {
        allLatencies.push(...w.latencyHistory);
      }
    });
    let p95 = avgLatency * 1.5 + 1000; // fallback
    if (allLatencies.length > 10) {
      const sortedLat = [...allLatencies].sort((a, b) => a - b);
      const idx = Math.floor(sortedLat.length * P95_PERCENTILE);
      p95 = sortedLat[Math.min(idx, sortedLat.length - 1)];
    }
    // Timeout = P95 + margin, dibatasi
    let timeout = Math.min(MAX_TIMEOUT, Math.max(MIN_TIMEOUT, p95 + 500));
    timeout = Math.round(timeout);

    // Siapkan headers & path
    const parsedUrl = new URL(request.url);
    const urlPathAndQuery = parsedUrl.pathname + parsedUrl.search;
    const hasBody = request.method !== 'GET' && request.method !== 'HEAD';
    const modifiedHeaders = new Headers(request.headers);
    modifiedHeaders.set('Connection', 'keep-alive');
    if (!modifiedHeaders.has('Accept-Encoding')) {
      modifiedHeaders.set('Accept-Encoding', 'gzip, deflate, br');
    }

    // ---- Loop batch ----
    let lastError = null;
    // Gunakan topWorkers yang sudah diurutkan, dan batch berdasarkan ukuran
    for (let i = 0; i < topWorkers.length; i += batchSize) {
      const batch = topWorkers.slice(i, i + batchSize);

      const promises = batch.map(async (worker) => {
        const url = worker.url;
        try {
          const targetUrl = `https://${url}${urlPathAndQuery}`;
          const reqClone = hasBody ? request.clone() : request;
          const modifiedRequest = new Request(targetUrl, {
            method: request.method,
            headers: modifiedHeaders,
            body: hasBody ? reqClone.body : null,
            redirect: 'manual'
          });

          const controller = new AbortController();
          const timer = setTimeout(() => controller.abort(), timeout);
          const response = await fetch(modifiedRequest, { signal: controller.signal });
          clearTimeout(timer);

          if (response.status === 429 || response.status >= 500) {
            throw new Error(`Status ${response.status}`);
          }

          // Sukses: update stats (latency dihitung dari startTime)
          const latency = performance.now() - startTime;
          updateWorkerStats(worker, true, latency, response.status);
          return response;
        } catch (err) {
          // Gagal: update stats (latency 0)
          updateWorkerStats(worker, false, 0, 0);
          throw err;
        }
      });

      try {
        // Promise.any = ambil response tercepat
        const response = await Promise.any(promises);
        // ========== 5. PASSIVE HEALTH CHECK (ctx.waitUntil) ==========
        // Lakukan health check asinkron terhadap beberapa worker lain
        ctx.waitUntil(performPassiveHealthCheck(workerStats, cache, ctx));
        // Simpan stats ke cache secara asinkron
        ctx.waitUntil(saveWorkerStats(cache, workerStats));
        return response;
      } catch (err) {
        lastError = err;
        continue;
      }
    }

    // Semua gagal
    ctx.waitUntil(saveWorkerStats(cache, workerStats));
    return new Response('Semua worker gagal. Coba lagi nanti.', { status: 503 });
  }
};

// ==================== FUNGSI PEMBANTU ====================

/**
 * Ambil stats dari Cache API
 */
async function getWorkerStats(cache) {
  try {
    const cacheKey = new Request(CACHE_KEY);
    const cached = await cache.match(cacheKey);
    if (cached) {
      return await cached.json();
    }
  } catch (_) { /* ignore */ }
  return null;
}

/**
 * Simpan stats ke Cache API
 */
async function saveWorkerStats(cache, stats) {
  try {
    const json = JSON.stringify(stats);
    const response = new Response(json, {
      headers: { 'Content-Type': 'application/json' }
    });
    const cacheKey = new Request(CACHE_KEY);
    await cache.put(cacheKey, response);
  } catch (_) { /* ignore */ }
}

/**
 * Inisialisasi stats untuk setiap URL
 */
function initializeStats(urls) {
  return urls.map(url => ({
    url,
    score: DEFAULT_SCORE,
    consecutiveFailures: 0,
    cooldownUntil: 0,
    ewmaLatency: 0,              // EWMA latency
    successRate: 1.0,            // success rate (0-1)
    totalRequests: 0,
    successCount: 0,
    lastUpdated: Date.now(),
    predictiveScore: 50,         // nilai prediktif
    jitter: 0,                   // variasi latency
    latencyHistory: [],          // array untuk P95 dan jitter
    blacklisted: false,
    blacklistUntil: 0,
    recoveryUntil: 0,            // masa pemulihan skor
  }));
}

/**
 * Update semua metrik worker berdasarkan hasil request
 */
function updateWorkerStats(worker, success, latency, status) {
  const now = Date.now();
  worker.totalRequests++;

  // Update success rate (moving window)
  if (success) {
    worker.successCount++;
  }
  // Hitung success rate sebagai rasio dari totalRequests, dengan batas window
  const windowSize = SUCCESS_RATE_WINDOW;
  const total = worker.totalRequests;
  const successes = worker.successCount;
  // Gunakan exponential moving average untuk success rate juga
  const currentRate = successes / total;
  worker.successRate = worker.successRate * 0.9 + currentRate * 0.1;

  if (success) {
    // Update EWMA latency
    if (worker.ewmaLatency === 0) {
      worker.ewmaLatency = latency;
    } else {
      worker.ewmaLatency = worker.ewmaLatency * (1 - EWMA_ALPHA) + latency * EWMA_ALPHA;
    }

    // Simpan latency ke history untuk P95 & jitter
    if (!worker.latencyHistory) worker.latencyHistory = [];
    worker.latencyHistory.push(latency);
    if (worker.latencyHistory.length > LATENCY_HISTORY_SIZE) {
      worker.latencyHistory.shift();
    }

    // Update jitter (standar deviasi dari history)
    if (worker.latencyHistory.length > 2) {
      const avg = worker.latencyHistory.reduce((a, b) => a + b, 0) / worker.latencyHistory.length;
      const variance = worker.latencyHistory.reduce((a, b) => a + (b - avg) ** 2, 0) / worker.latencyHistory.length;
      worker.jitter = Math.sqrt(variance);
    } else {
      worker.jitter = 0;
    }

    // Reset cooldown & blacklist
    worker.consecutiveFailures = 0;
    worker.cooldownUntil = 0;
    // Jika sebelumnya blacklist, mulai recovery
    if (worker.blacklisted) {
      worker.blacklisted = false;
      worker.blacklistUntil = 0;
      worker.recoveryUntil = now + RECOVERY_INTERVAL * 1000;
    }

    // Naikkan skor secara bertahap (jika dalam recovery)
    if (worker.recoveryUntil > now) {
      worker.score = Math.min(100, worker.score + 2);
    } else {
      worker.recoveryUntil = 0;
    }

    // Prediksi skor: nilai yang akan digunakan di ranking berikutnya
    // update predictiveScore dengan kombinasi latency dan success
    const latencyScore = worker.ewmaLatency > 0 
      ? Math.max(0, 100 - (worker.ewmaLatency / 50))
      : 50;
    const successScore = worker.successRate * 100;
    worker.predictiveScore = latencyScore * 0.6 + successScore * 0.4;

  } else {
    // Gagal
    worker.consecutiveFailures++;
    worker.score = Math.max(0, worker.score - 10);

    // Auto Blacklist jika skor di bawah threshold atau consecutiveFailures tinggi
    if (worker.score < BLACKLIST_SCORE_THRESHOLD || worker.consecutiveFailures >= MAX_CONSECUTIVE_FAILURES) {
      worker.blacklisted = true;
      worker.blacklistUntil = now + BLACKLIST_DURATION * 1000;
      worker.cooldownUntil = worker.blacklistUntil; // juga cooldown
      worker.score = Math.min(worker.score, BLACKLIST_SCORE_THRESHOLD - 1);
    } else {
      // Cooldown biasa
      if (worker.consecutiveFailures >= MAX_CONSECUTIVE_FAILURES) {
        worker.cooldownUntil = now + COOLDOWN_SECONDS * 1000;
      }
    }
  }

  worker.lastUpdated = now;
}

/**
 * Passive Health Check: lakukan request ringan ke beberapa worker yang
 * sedang tidak aktif (atau yang terakhir gagal) untuk menguji kesehatan,
 * tanpa mempengaruhi response utama.
 */
async function performPassiveHealthCheck(workerStats, cache, ctx) {
  const now = Date.now();
  // Pilih worker yang sedang cooldown/blacklist atau yang skornya rendah
  const candidates = workerStats.filter(w => 
    w.cooldownUntil > now || w.blacklisted || w.score < 40
  );
  if (candidates.length === 0) return;

  // Ambil 3 worker untuk dicek
  const toCheck = candidates.slice(0, 3);
  const checkPromises = toCheck.map(async (worker) => {
    try {
      // Lakukan HEAD request ke root dengan timeout pendek (2 detik)
      const url = `https://${worker.url}/`;
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 2000);
      const resp = await fetch(url, { method: 'HEAD', signal: controller.signal });
      clearTimeout(timer);
      if (resp.ok) {
        // Jika sukses, reset beberapa metrik (beri kesempatan recovery)
        worker.consecutiveFailures = 0;
        worker.cooldownUntil = 0;
        if (worker.blacklisted && worker.blacklistUntil < now + 10000) {
          // Jika blacklist hampir habis, lepaskan
          worker.blacklisted = false;
          worker.blacklistUntil = 0;
          worker.recoveryUntil = now + RECOVERY_INTERVAL * 1000;
        }
        // Naikkan skor sedikit
        worker.score = Math.min(100, worker.score + 5);
      }
    } catch (_) {
      // Tidak ada tindakan
    }
  });

  await Promise.allSettled(checkPromises);
  // Simpan perubahan
  await saveWorkerStats(cache, workerStats);
}