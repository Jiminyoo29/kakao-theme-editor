import JSZip from 'jszip'
import type { ThemeColors, ThemeMetadata } from '../types/theme'

/**
 * 카카오톡 .ktheme 파일 내부 구조:
 * - theme.json  : 색상 매핑 (공식 키 이름 사용)
 * - manifest.json : 테마 메타데이터
 */

function buildThemeJson(colors: ThemeColors): string {
  const kakaoMap = {
    // 공식 키 이름 (실제 .ktheme 규격 참고)
    'BubbleMe.BgColor': colors.myBubbleBg,
    'BubbleMe.TextColor': colors.myBubbleText,
    'BubbleOther.BgColor': colors.otherBubbleBg,
    'BubbleOther.TextColor': colors.otherBubbleText,
    'Chat.BgColor': colors.chatBg,
    'Header.BgColor': colors.headerBg,
    'Header.TitleColor': colors.headerText,
    'InputArea.BgColor': colors.inputBg,
    'InputArea.TextColor': colors.inputText,
    'TabBar.BgColor': colors.tabBarBg,
    'TabBar.SelectedColor': colors.tabBarActive,
    'TabBar.UnselectedColor': colors.tabBarInactive,
    'Friend.BgColor': colors.mainBg,
    'NameTag.TextColor': colors.nameText,
    'TimeStamp.TextColor': colors.timeText,
  }

  return JSON.stringify({ colors: kakaoMap }, null, 2)
}

function buildManifestJson(metadata: ThemeMetadata): string {
  return JSON.stringify(
    {
      name: metadata.name,
      author: metadata.author,
      version: metadata.version,
      created_at: new Date().toISOString(),
      platform: 'KakaoTalk',
    },
    null,
    2,
  )
}

export async function buildKthemeBlob(
  colors: ThemeColors,
  metadata: ThemeMetadata,
): Promise<Blob> {
  const zip = new JSZip()

  zip.file('theme.json', buildThemeJson(colors))
  zip.file('manifest.json', buildManifestJson(metadata))

  return zip.generateAsync({ type: 'blob' })
}

export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}
