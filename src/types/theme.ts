// ─── 색상 키 목록 (타입 안전성 보장) ───────────────────────────────────────
export type ColorKey =
  // 배경
  | 'mainBg'
  | 'chatBg'
  // 내 말풍선
  | 'myBubbleBg'
  | 'myBubbleText'
  // 상대방 말풍선
  | 'otherBubbleBg'
  | 'otherBubbleText'
  // 헤더
  | 'headerBg'
  | 'headerText'
  // 입력창
  | 'inputBg'
  | 'inputText'
  // 탭바
  | 'tabBarBg'
  | 'tabBarActive'
  | 'tabBarInactive'
  // 텍스트 (닉네임·시간)
  | 'nameText'
  | 'timeText'

// ─── 색상 전체 맵 ─────────────────────────────────────────────────────────
export type ThemeColors = Record<ColorKey, string>

// ─── 테마 메타데이터 ─────────────────────────────────────────────────────
export interface ThemeMetadata {
  name: string
  author: string
  version: string
}

// ─── 전체 테마 객체 ──────────────────────────────────────────────────────
export interface KakaoTheme {
  metadata: ThemeMetadata
  colors: ThemeColors
}

// ─── 컨트롤 패널에 표시할 섹션 정의 ─────────────────────────────────────
export interface ColorField {
  key: ColorKey
  label: string
}

export interface ColorSection {
  title: string
  fields: ColorField[]
}

// ─── 기본 테마 (카카오 기본 노란 테마) ────────────────────────────────────
export const DEFAULT_COLORS: ThemeColors = {
  mainBg: '#F5F5F5',
  chatBg: '#B2C7D9',
  myBubbleBg: '#FFEB33',
  myBubbleText: '#1A1A1A',
  otherBubbleBg: '#FFFFFF',
  otherBubbleText: '#1A1A1A',
  headerBg: '#FFEB33',
  headerText: '#1A1A1A',
  inputBg: '#FFFFFF',
  inputText: '#1A1A1A',
  tabBarBg: '#FFFFFF',
  tabBarActive: '#3C1E1E',
  tabBarInactive: '#9E9E9E',
  nameText: '#1A1A1A',
  timeText: '#6B6B6B',
}

// ─── 기본 메타데이터 ─────────────────────────────────────────────────────
export const DEFAULT_METADATA: ThemeMetadata = {
  name: '나만의 테마',
  author: 'me',
  version: '1.0.0',
}

// ─── 컨트롤 패널 섹션 구성 ───────────────────────────────────────────────
export const COLOR_SECTIONS: ColorSection[] = [
  {
    title: '배경',
    fields: [
      { key: 'mainBg', label: '메인 배경' },
      { key: 'chatBg', label: '채팅방 배경' },
    ],
  },
  {
    title: '내 말풍선',
    fields: [
      { key: 'myBubbleBg', label: '말풍선 배경' },
      { key: 'myBubbleText', label: '텍스트' },
    ],
  },
  {
    title: '상대방 말풍선',
    fields: [
      { key: 'otherBubbleBg', label: '말풍선 배경' },
      { key: 'otherBubbleText', label: '텍스트' },
    ],
  },
  {
    title: '헤더',
    fields: [
      { key: 'headerBg', label: '헤더 배경' },
      { key: 'headerText', label: '헤더 텍스트' },
    ],
  },
  {
    title: '입력창',
    fields: [
      { key: 'inputBg', label: '입력창 배경' },
      { key: 'inputText', label: '입력창 텍스트' },
    ],
  },
  {
    title: '탭바',
    fields: [
      { key: 'tabBarBg', label: '탭바 배경' },
      { key: 'tabBarActive', label: '활성 아이콘' },
      { key: 'tabBarInactive', label: '비활성 아이콘' },
    ],
  },
  {
    title: '텍스트',
    fields: [
      { key: 'nameText', label: '닉네임' },
      { key: 'timeText', label: '시간' },
    ],
  },
]
