// --- Quiz Questions Database (Gamma Structure Overhauled) ---
const shakiQuestions = [
    {
        q: "Hey Shaki, as the ultimate first-born talkative vibe queen, what's your reaction when Emma asks to borrow your favorite outfit?",
        options: [
            { text: "Laugh and say 'Take whatever you want, cuz!' 🥹", correct: false, tricky: true },
            { text: "Hide it immediately and lock your room 🔒😂", correct: true, tricky: false }
        ]
    },
    {
        q: "You are officially turning 20 today! What's the biggest 'Big Sis' trait you possess?",
        options: [
            { text: "Giving amazing, mature life advice", correct: false, tricky: true },
            { text: "Sending long voice notes that sound like a whole podcast 🎙️💀", correct: true, tricky: false }
        ]
    },
    {
        q: "Let's see if you know your cousin Emma... What is Emma's absolute worst habit according to you?",
        options: [
            { text: "Being too quiet (impossible!)", correct: false, tricky: true },
            { text: "Interrupting your juicy stories just when it gets to the plot twist 😤", correct: true, tricky: false }
        ]
    },
    {
        q: "Complete this statement: 'At a Kenyan party, Shaki is most likely to...'",
        options: [
            { text: "Sit in the corner scrolling on her phone", correct: false, tricky: true },
            { text: "Lead the dance line, scream the lyrics, and order the extra choma! 💃🏿🔥", correct: true, tricky: false }
        ]
    }
];

const familyQuestions = [
    {
        q: "What does Shaki usually say when it's time for family dessert?",
        options: [
            { text: "Not today, I'm full.", correct: false },
            { text: "Save room for the cake!", correct: true },
            { text: "I'll eat later by myself.", correct: false },
            { text: "Can someone warm it?", correct: false }
        ]
    },
    {
        q: "Which snack is Shaki most likely to grab first at a party?",
        options: [
            { text: "Pilau on a plate", correct: false },
            { text: "Samosas and chips", correct: false },
            { text: "Nyama choma with kachumbari", correct: true },
            { text: "Just fruit and soda", correct: false }
        ]
    },
    {
        q: "When Shaki gets excited, how does she celebrate?",
        options: [
            { text: "Whisper quietly to herself", correct: false },
            { text: "Dance and sing loudly", correct: true },
            { text: "Hide in another room", correct: false },
            { text: "Take a long nap", correct: false }
        ]
    },
    {
        q: "What does Shaki request most often from Emma?",
        options: [
            { text: "Share your dessert", correct: true },
            { text: "Stop talking so much", correct: false },
            { text: "Bring extra sugar", correct: false },
            { text: "Vacuum the room", correct: false }
        ]
    },
    {
        q: "How does Shaki prefer to start a birthday photo?",
        options: [
            { text: "With serious poses", correct: false },
            { text: "With a loud laugh", correct: true },
            { text: "Without looking at the camera", correct: false },
            { text: "Only selfies", correct: false }
        ]
    },
    {
        q: "What does Shaki say when she wins a game?",
        options: [
            { text: "I was just lucky!", correct: false },
            { text: "I told you I would win!", correct: true },
            { text: "Let's stop now.", correct: false },
            { text: "I don't want cake.", correct: false }
        ]
    },
    {
        q: "Which message is Shaki most likely to send in the morning?",
        options: [
            { text: "Ready for the party?", correct: true },
            { text: "Do not disturb.", correct: false },
            { text: "I forgot the gift.", correct: false },
            { text: "Call me later.", correct: false }
        ]
    },
    {
        q: "What kind of playlist makes Shaki dance the most?",
        options: [
            { text: "Smooth jazz", correct: false },
            { text: "Kenyan party hits", correct: true },
            { text: "Sleep meditation", correct: false },
            { text: "Classic rock", correct: false }
        ]
    },
    {
        q: "What is Shaki's favorite style of cake?",
        options: [
            { text: "Simple vanilla", correct: false },
            { text: "Chocolate with sparkles", correct: true },
            { text: "Plain soda cake", correct: false },
            { text: "No cake at all", correct: false }
        ]
    },
    {
        q: "How does Shaki react when someone says 'surprise'?",
        options: [
            { text: "She screams with joy", correct: true },
            { text: "She stays quiet", correct: false },
            { text: "She leaves the room", correct: false },
            { text: "She hides her gift", correct: false }
        ]
    }
];

// --- State Variables ---
let currentMode = 'shaki';
let currentQuestionIndex = 0;
let score = 0;
let currentQuestionsList = shakiQuestions;
let currentPlayerName = "Shaki 👑";

// --- Leaderboard Sync Storage ---
let mockDatabaseScores = [
    { name: "Emma (Cousin)", role: "The Creator", score: 4 },
    { name: "Mama Shaki", role: "The Anchor", score: 3 },
    { name: "Brian", role: "Friend Squad", score: 2 }
];

const playlistTracks = [
    { id: 'person', category: 'kenyan', title: 'Person', artist: 'Burna Boy', file: 'person.mp3' },
    { id: 'jinja', category: 'kenyan', title: 'Jinja', artist: 'Olamide', file: 'olamide-jinja.mp3' },
    { id: 'ocean-eyes', category: 'tiktok', title: 'Ocean Eyes', artist: 'Billie Eilish', file: 'ocean-eyes.mp3' },
    { id: 'me-and-you', category: 'tiktok', title: 'Me & U', artist: 'Tems', file: 'tems-me-and-u.mp3' },
    { id: 'mopepe', category: 'kenyan', title: 'Mopepe', artist: 'Benzoo & Bukzin', file: 'mopepe.mp3' }
];

const spotifyPlaylists = {
    tiktok: 'https://open.spotify.com/playlist/37i9dQZF1DX1ZkMy7fEmbS',
    kenyan: 'https://open.spotify.com/playlist/37i9dQZF1DWYUTpGRoX2Mw'
};

const songGuessQuestions = [
    {
        q: 'Which song name matches the latest TikTok birthday dance trend?',
        options: [
            { text: 'Party On My Terms', correct: false },
            { text: 'Vibe With Shaki', correct: true },
            { text: 'Happy Sis Challenge', correct: false }
        ]
    },
    {
        q: 'Which track would play during a Kenyan choma party?',
        options: [
            { text: 'Nairobi Nights', correct: true },
            { text: 'City Sunrise', correct: false },
            { text: 'Island Chill', correct: false }
        ]
    },
    {
        q: 'Which song title is most likely to be a TikTok duet trend?',
        options: [
            { text: 'Talk Back Me', correct: true },
            { text: 'Solo Fire', correct: false },
            { text: 'Quiet Queen', correct: false }
        ]
    }
];

const birthdayFortunes = [
    'Take a 10-second TikTok dance break and tag Shaki for the next story!',
    'Play the next Kenyan track loud and lead the dance circle.',
    'Grab a plate of nyama choma and start a quick birthday toast!',
    'Ask Shaki to name her top 3 Kenyan artists right now.',
    'Share the loudest birthday cheer and a surprise emoji blast.'
];

const emojiChallengePrompts = [
    {
        q: '🕺🏿 + 🎶: Which birthday move should Shaki perform next?',
        options: [
            { text: 'Firework Footwork', correct: true },
            { text: 'Quiet Candle Blowing', correct: false },
            { text: 'Slow Walk Home', correct: false }
        ]
    },
    {
        q: '🎉 + 🍰: What is the best party fantasy task for Emma?',
        options: [
            { text: 'Decorate the cake with glitter', correct: true },
            { text: 'Practice math homework', correct: false },
            { text: 'Wash the dishes quietly', correct: false }
        ]
    },
    {
        q: '🌈 + ✨: Which magical party prompt should Shaki choose?',
        options: [
            { text: 'Create a crown from flowers', correct: true },
            { text: 'Text everyone only emojis', correct: false },
            { text: 'Take a nap behind the curtains', correct: false }
        ]
    }
];

const surpriseQuests = [
    'Lead a short TikTok birthday challenge that everyone copies.',
    'Ask one family member to share a funny Shaki story in one sentence.',
    'Give Shaki a high-five and tell her she is the queen of the party.',
    'Take a group selfie with the most dramatic birthday pose.',
    'Whisper a secret birthday wish and then shout it out loud together.'
];

let selectedSongGuessIndex = 0;
let selectedAudioTrackId = 'person';
let selectedEmojiChallengeIndex = 0;


function renderPlaylist(category = 'tiktok') {
    const trackList = document.getElementById('track-list');
    const tracks = playlistTracks.filter(track => track.category === category);

    if (!trackList) return;
    trackList.innerHTML = tracks.map(track => {
        return `
            <button class="btn btn-sm btn-light w-100 text-start mb-2 track-item" onclick="selectTrack('${track.id}')">
                <strong>${track.title}</strong> · ${track.artist}
            </button>
        `;
    }).join('');

    const defaultTrack = tracks.find(t => t.id === selectedAudioTrackId) || tracks[0];
    if (defaultTrack) {
        selectTrack(defaultTrack.id, false);
    }
}

function selectTrack(trackId, shouldPlay = true) {
    selectedAudioTrackId = trackId;
    const selectedTrack = playlistTracks.find(track => track.id === trackId);
    if (!selectedTrack) return;

    const audio = document.getElementById('bg-music');
    if (!audio) return;
    audio.src = selectedTrack.file;
    audio.load();
    updateNowPlayingText(selectedTrack);
    if (shouldPlay) {
        audio.play().catch(() => {});
    }
}

function updateNowPlayingText(track) {
    const nowPlaying = document.getElementById('now-playing-text');
    if (!nowPlaying || !track) return;
    nowPlaying.innerText = `${track.title} · ${track.artist}`;
}

function openSpotifyPlaylist(listName) {
    const url = spotifyPlaylists[listName] || spotifyPlaylists.tiktok;
    window.open(url, '_blank');
}

function openSpotifySong(trackId = selectedAudioTrackId) {
    const track = playlistTracks.find(item => item.id === trackId);
    if (!track) return;
    const searchUrl = `https://open.spotify.com/search/${encodeURIComponent(track.title + ' ' + track.artist)}`;
    window.open(searchUrl, '_blank');
}

function shareSongWithShaki(trackId = selectedAudioTrackId) {
    const track = playlistTracks.find(item => item.id === trackId);
    if (!track) return;
    const message = `Hi Shaki! I picked ${track.title} by ${track.artist} as a special birthday song for you. Check it out on Spotify: https://open.spotify.com/search/${encodeURIComponent(track.title + ' ' + track.artist)}`;
    const whatsappUrl = `https://wa.me/254117019877?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function previewUploadedImages() {
    const input = document.getElementById('photo-upload');
    const preview = document.getElementById('photo-preview');
    if (!input || !preview) return;

    preview.innerHTML = '';
    Array.from(input.files).slice(0, 10).forEach(file => {
        if (!file.type.startsWith('image/')) return;
        const reader = new FileReader();
        const col = document.createElement('div');
        col.className = 'col-6 col-md-4';
        const card = document.createElement('div');
        card.className = 'shadow-sm rounded-4 overflow-hidden bg-light';
        const img = document.createElement('img');
        img.className = 'img-fluid';
        const label = document.createElement('div');
        label.className = 'p-2 small text-center text-truncate';
        label.innerText = file.name;
        card.appendChild(img);
        card.appendChild(label);
        col.appendChild(card);
        preview.appendChild(col);

        reader.onload = e => {
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    });
}

function loadSongGuessQuestion() {
    const questionBox = document.getElementById('guess-question');
    const optionsBox = document.getElementById('guess-options');
    const resultBox = document.getElementById('guess-result');
    const question = songGuessQuestions[selectedSongGuessIndex];

    if (!questionBox || !optionsBox || !resultBox) return;
    questionBox.innerText = question.q;
    optionsBox.innerHTML = '';
    resultBox.innerText = '';

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'btn btn-outline-dark rounded-pill py-2';
        button.innerText = option.text;
        button.onclick = () => submitSongGuess(option.correct);
        optionsBox.appendChild(button);
    });
}

function submitSongGuess(isCorrect) {
    const resultBox = document.getElementById('guess-result');
    if (!resultBox) return;
    if (isCorrect) {
        resultBox.innerText = 'Correct! You know the trend — Shaki would be proud! 🎉';
        resultBox.className = 'mt-3 fw-bold text-success';
    } else {
        resultBox.innerText = 'Nice try! Try the next tune and keep the party energy. 😉';
        resultBox.className = 'mt-3 fw-bold text-danger';
    }
    selectedSongGuessIndex = (selectedSongGuessIndex + 1) % songGuessQuestions.length;
    setTimeout(loadSongGuessQuestion, 1800);
}

function restartSongGuessGame() {
    selectedSongGuessIndex = 0;
    loadSongGuessQuestion();
}

function loadEmojiChallenge() {
    const challengeQuestion = document.getElementById('emoji-challenge-question');
    const optionsBox = document.getElementById('emoji-challenge-options');
    const resultBox = document.getElementById('emoji-challenge-result');
    const challenge = emojiChallengePrompts[selectedEmojiChallengeIndex];

    if (!challengeQuestion || !optionsBox || !resultBox) return;
    challengeQuestion.innerText = challenge.q;
    optionsBox.innerHTML = '';
    resultBox.innerText = '';

    challenge.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'btn btn-outline-dark rounded-pill py-2';
        button.innerText = option.text;
        button.onclick = () => submitEmojiChallenge(option.correct);
        optionsBox.appendChild(button);
    });
}

function submitEmojiChallenge(isCorrect) {
    const resultBox = document.getElementById('emoji-challenge-result');
    if (!resultBox) return;
    if (isCorrect) {
        resultBox.innerText = 'Magic! Your emoji fantasy came true — well done! ✨';
        resultBox.className = 'mt-3 fw-bold text-success';
    } else {
        resultBox.innerText = 'Close call! Refresh the prompt for another fantasy challenge. 💫';
        resultBox.className = 'mt-3 fw-bold text-danger';
    }
    selectedEmojiChallengeIndex = (selectedEmojiChallengeIndex + 1) % emojiChallengePrompts.length;
    setTimeout(loadEmojiChallenge, 1800);
}

function restartEmojiChallenge() {
    selectedEmojiChallengeIndex = 0;
    loadEmojiChallenge();
}

function spinSurpriseQuest() {
    const questResult = document.getElementById('quest-result');
    if (!questResult) return;
    const quest = surpriseQuests[Math.floor(Math.random() * surpriseQuests.length)];
    questResult.innerText = quest;
}

function getWhatsAppShareUrl(name, score, total) {
    const passed = score >= Math.ceil(total / 2);
    const reaction = passed ? '🎉 Passed with flying colors!' : '😢 Almost there — try again!';
    const message = `Hi Shaki! ${name} just completed the family trivia and scored ${score}/${total}. ${reaction}`;
    return `https://wa.me/254117019877?text=${encodeURIComponent(message)}`;
}

function showWhatsAppShare(name, score, total) {
    const shareBox = document.getElementById('whatsapp-share-box');
    if (!shareBox) return;
    const url = getWhatsAppShareUrl(name, score, total);
    shareBox.innerHTML = `
        <div class="alert alert-info rounded-4 p-4">
            <p class="mb-3"><strong>Send this score to Shaki via WhatsApp:</strong></p>
            <a class="btn btn-success rounded-pill px-4" href="${url}" target="_blank" rel="noreferrer noopener">
                Send Result to Shaki on WhatsApp
            </a>
        </div>
    `;
}

function spinBirthdayFortune() {
    const resultBox = document.getElementById('spinner-result');
    if (!resultBox) return;
    const choice = birthdayFortunes[Math.floor(Math.random() * birthdayFortunes.length)];
    resultBox.innerText = choice;
}

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    loadLeaderboard();
    loadQuestion();
    renderPlaylist('tiktok');
    loadSongGuessQuestion();
    loadEmojiChallenge();
});

// --- Mode Switch Logic ---
function switchMode(mode) {
    currentMode = mode;
    currentQuestionIndex = 0;
    score = 0;
    
    const shakiBtn = document.getElementById('btn-shaki-mode');
    const familyBtn = document.getElementById('btn-family-mode');
    const regBox = document.getElementById('registration-box');

    if (mode === 'shaki') {
        shakiBtn.classList.add('active');
        familyBtn.classList.remove('active');
        regBox.classList.add('d-none');
        currentQuestionsList = shakiQuestions;
        currentPlayerName = "Shaki 👑";
        loadQuestion();
    } else {
        familyBtn.classList.add('active');
        shakiBtn.classList.remove('active');
        regBox.classList.remove('d-none');
        currentQuestionsList = familyQuestions;
        document.getElementById('question-container').classList.add('d-none'); 
    }
}

function startFamilyQuiz() {
    const nameInput = document.getElementById('player-name').value.trim();
    if (!nameInput) {
        alert("Please enter your name to challenge Shaki's records!");
        return;
    }
    currentPlayerName = nameInput;
    document.getElementById('registration-box').classList.add('d-none');
    document.getElementById('question-container').classList.remove('d-none');
    loadQuestion();
}

// --- Dynamic Rendering & Runaway Logic ---
function loadQuestion() {
    document.getElementById('score-counter').innerText = `Score: ${score}`;
    
    if (currentQuestionIndex >= currentQuestionsList.length) {
        finishQuiz();
        return;
    }

    // Update Headers
    document.getElementById('question-counter').innerText = `Question ${currentQuestionIndex + 1} of ${currentQuestionsList.length}`;
    const progressPercent = ((currentQuestionIndex + 1) / currentQuestionsList.length) * 100;
    document.getElementById('quiz-progress').style.width = `${progressPercent}%`;

    const currentQ = currentQuestionsList[currentQuestionIndex];
    document.getElementById('question-text').innerText = currentQ.q;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    // Render Response Option Choices
    currentQ.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt.text;
        btn.className = "btn btn-outline-dark py-3 px-4 rounded-pill fw-bold text-start trivia-btn position-relative";
        
        if (opt.tricky) {
            // Attach running evasion listeners onto the tricky options!
            btn.addEventListener('mouseover', runawayButton);
            btn.addEventListener('click', runawayButton);
        } else {
            btn.addEventListener('click', () => submitAnswer(opt.correct));
        }
        optionsContainer.appendChild(btn);
    });
}

// --- The Escape Routine Physics ---
function runawayButton(e) {
    const btn = e.target;
    const container = document.getElementById('options-container');
    const containerRect = container.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();

    // Calculate maximum boundaries to stay strictly within the card display bounds
    const maxX = containerRect.width - btnRect.width - 20;
    const maxY = containerRect.height - btnRect.height - 20;

    const randomX = Math.max(10, Math.floor(Math.random() * maxX));
    const randomY = Math.max(10, Math.floor(Math.random() * maxY));

    btn.style.position = 'absolute';
    btn.style.left = `${randomX}px`;
    btn.style.top = `${randomY}px`;
    btn.classList.replace('btn-outline-dark', 'btn-danger');
}

// --- Full Screen Dramatic Flash Triggers ---
function submitAnswer(isCorrect) {
    const overlay = document.getElementById('emoji-overlay');
    const overlayContent = document.getElementById('overlay-emoji-content');

    overlay.classList.remove('d-none');

    if (isCorrect) {
        score++;
        overlay.style.backgroundColor = "rgba(40, 167, 69, 0.95)"; // Joyous Bright Green
        overlayContent.innerHTML = `🥹🎂🥂👏🏿🎉<br><span class="fs-2 text-white">Yesss Big Sis! Correct!</span><br>😽🤓😁`;
    } else {
        overlay.style.backgroundColor = "rgba(220, 53, 69, 0.95)"; // Dramatic Red Furious Flash
        overlayContent.innerHTML = `😢😡🤦🏿🫵🏿🫨😵<br><span class="fs-2 text-white">Disbelief! Absolute Wrong Answer!</span>`;
    }

    // Hold visual suspense for 2.5 seconds, then load next sequence
    setTimeout(() => {
        overlay.classList.add('d-none');
        currentQuestionIndex++;
        loadQuestion();
    }, 2500);
}

// --- End Game Scoring & Local DB Storage Pipeline ---
function finishQuiz() {
    document.getElementById('question-text').innerText = `✨ Quiz Complete! ✨`;
    const optionsContainer = document.getElementById('options-container');
    
    let completionMessage = "";
    if (currentMode === 'shaki') {
        completionMessage = `Fantastic job Shaki! You scored ${score}/${currentQuestionsList.length}. Emma is cheering for you! 🥂🎉`;
        showWhatsAppShare('Shaki', score, currentQuestionsList.length);
    } else {
        completionMessage = `${currentPlayerName} scored ${score}/${currentQuestionsList.length}! Your scorecard is now pinned below for Shaki's inspection! 🫢`;
        // Push family/friends profile down to local database tracking
        mockDatabaseScores.push({ name: currentPlayerName, role: "Challenger 🔥", score: score });
        loadLeaderboard();
        showWhatsAppShare(currentPlayerName, score, currentQuestionsList.length);
    }

    optionsContainer.innerHTML = `
        <div class="alert alert-success text-center rounded-4 p-4 fw-bold animate-bounce">
            ${completionMessage}
        </div>
        <button class="btn btn-dark rounded-pill py-2 mt-2" onclick="restartQuiz()">Restart Quiz 🔄</button>
    `;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    const shareBox = document.getElementById('whatsapp-share-box');
    if (shareBox) shareBox.innerHTML = '';
    loadQuestion();
}

// --- Food Menu Celebrations ---
function triggerFoodCelebration() {
    const selector = document.getElementById('foodSelect');
    const chosenText = selector.options[selector.selectedIndex].text;
    const responseDiv = document.getElementById('food-choice-response');

    responseDiv.innerHTML = `🤤🤤 Mukbang Activated! We are devouring: <br><strong>${chosenText}</strong> 😝🕺🏿💃🏿`;
}

// --- Load/Render Scoreboard rows ---
function loadLeaderboard() {
    const tbody = document.getElementById('leaderboard-body');
    tbody.innerHTML = '';
    
    // Sort array descending to put the true high scores at the crown top position
    mockDatabaseScores.sort((a, b) => b.score - a.score);

    mockDatabaseScores.forEach((row, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <th scope="row">${index + 1}</th>
            <td class="fw-bold">${row.name}</td>
            <td><span class="badge bg-secondary">${row.role}</span></td>
            <td class="text-danger fw-bold fs-5">${row.score} Points</td>
        `;
        tbody.appendChild(tr);
    });
}