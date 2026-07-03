const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src/pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  if (file === 'Home.tsx') continue; // Already did Home.tsx
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace <nav ...> ... </nav> with <Navbar />
  const navRegex = /<nav\s+className="fixed top-0 left-0 right-0 z-50[^>]*>[\s\S]*?<\/nav>/g;
  if (navRegex.test(content)) {
    content = content.replace(navRegex, '<Navbar />');
    
    // Remove import logoImg
    content = content.replace(/import logoImg from "@\/src\/assets\/images\/regenerated_image_1781776475830\.png";\n?/, '');
    
    // Ensure import { Link } is not used unnecessarily or if we need Navbar import
    if (!content.includes('import Navbar from "@/src/components/Navbar";')) {
      content = 'import Navbar from "@/src/components/Navbar";\n' + content;
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}
