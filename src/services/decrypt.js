async function deriveKeyFromPassphrase(passphrase) {
    // Calcula SHA-256
    const passphraseBytes = new TextEncoder().encode(passphrase);
    const hashBuffer = await window.crypto.subtle.digest("SHA-256", passphraseBytes);
  
    // Importa como AES-CBC key
    return window.crypto.subtle.importKey(
      "raw",
      hashBuffer,
      { name: "AES-CBC" },
      false,
      ["decrypt"]
    );
  }
  
  
  
  
  export default  async function decryptModelo(encrypted) {
    const PASSPHRASE = "iA2T*vh39w0BAo"; 
  
    const key = await deriveKeyFromPassphrase(PASSPHRASE);
  
    const iv = Uint8Array.from(atob(encrypted.iv), c => c.charCodeAt(0));
    const encryptedData = Uint8Array.from(atob(encrypted.data), c => c.charCodeAt(0));
  
    const decrypted = await window.crypto.subtle.decrypt(
      { name: "AES-CBC", iv },
      key,
      encryptedData
    );
  
    return new Uint8Array(decrypted);
  }
  