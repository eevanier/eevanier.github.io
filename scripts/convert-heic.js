import fs from 'node:fs';
import path from 'node:path';
import heicConvert from 'heic-convert';

const galleryDir = path.join(process.cwd(), 'public', 'images', 'gallery');

async function convertHeicFiles() {
  if (!fs.existsSync(galleryDir)) {
    console.log('Gallery directory does not exist yet. Skipping HEIC conversion.');
    return;
  }

  const files = fs.readdirSync(galleryDir);
  const heicFiles = files.filter(f => f.toLowerCase().endsWith('.heic'));

  if (heicFiles.length === 0) {
    return;
  }

  console.log(`Found ${heicFiles.length} HEIC file(s) to convert...`);

  for (const file of heicFiles) {
    const inputPath = path.join(galleryDir, file);
    const outputPath = path.join(galleryDir, file.replace(/\.heic$/i, '.jpg'));
    
    try {
      console.log(`Converting ${file}...`);
      const inputBuffer = fs.readFileSync(inputPath);
      
      // heic-convert returns an ArrayBuffer or Buffer depending on the environment
      const outputBuffer = await heicConvert({
        buffer: inputBuffer,
        format: 'JPEG',
        quality: 0.9
      });
      
      fs.writeFileSync(outputPath, Buffer.from(outputBuffer));
      fs.unlinkSync(inputPath); // Delete the original .heic
      console.log(`✅ Converted ${file} to JPG and removed original.`);
    } catch (err) {
      console.error(`❌ Failed to convert ${file}:`, err);
    }
  }
}

convertHeicFiles();
