/**
 * Decodes base64-encoded raw signed 16-bit PCM audio (24000 Hz, Mono)
 * and plays it flawlessly using Web Audio API AudioContext.
 */
export async function playRawPcm(base64Audio: string): Promise<{ source: AudioBufferSourceNode; ctx: AudioContext; stop: () => void }> {
  const binaryString = window.atob(base64Audio);
  const len = binaryString.length;
  
  // Convert string indices to uint8 array buffer
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  // 1 sample is 2 bytes (16-bit / 2 bytes)
  const numSamples = Math.floor(len / 2);
  const int16Samples = new Int16Array(bytes.buffer, 0, numSamples);

  // Initialize Web Audio API AudioContext
  const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
  if (!AudioContextClass) {
    throw new Error('Web Audio API is not supported in this browser.');
  }

  const audioCtx = new AudioContextClass();
  // gemini-3.1-flash-tts-preview responds in 24000 Hz 16-bit mono PCM.
  const sampleRate = 24000;
  const audioBuffer = audioCtx.createBuffer(1, numSamples, sampleRate);
  const channelData = audioBuffer.getChannelData(0);

  // Map 16-bit PCM scale [-32768, 32767] to standard Float32 scale [-1.0, 1.0]
  for (let i = 0; i < numSamples; i++) {
    channelData[i] = int16Samples[i] / 32768.0;
  }

  const source = audioCtx.createBufferSource();
  source.buffer = audioBuffer;
  source.connect(audioCtx.destination);
  source.start(0);

  return {
    source,
    ctx: audioCtx,
    stop: () => {
      try {
        source.stop();
        audioCtx.close();
      } catch (err) {
        // Silently capture already closed/stopped states
      }
    }
  };
}

/**
 * Standard synthetic click generator for key interactive micro-animations.
 * Creates an ultra-subtle futuristic electronic tick.
 */
export function playSynthTick(frequency: number = 800, duration: number = 0.03): void {
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + duration);

    gainNode.gain.setValueAtTime(0.015, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + duration);
    setTimeout(() => ctx.close(), 200);
  } catch (err) {
    // Fail silently on browsers restricting auto-play
  }
}
