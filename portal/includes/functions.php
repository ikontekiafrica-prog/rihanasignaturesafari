<?php
/**
 * RIHANNA SIGNATURE SAFARI - ATELIER PORTAL
 * Common Helper Functions
 */

declare(strict_types=1);

/**
 * Sanitize strings for display
 */
function e(?string $string): string {
    return htmlspecialchars((string)$string, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

/**
 * Generate clean URL-safe slugs
 */
function slugify(string $text): string {
    $text = preg_replace('~[^\pL\d]+~u', '-', $text);
    $text = iconv('utf-8', 'us-ascii//TRANSLIT', (string)$text);
    $text = preg_replace('~[^-\w]+~', '', (string)$text);
    $text = trim((string)$text, '-');
    $text = preg_replace('~-+~', '-', (string)$text);
    $text = strtolower((string)$text);
    return empty($text) ? 'journal-' . time() : $text;
}

/**
 * Calculate reading time in minutes
 */
function estimateReadTime(string $content): string {
    $wordCount = str_word_count(strip_tags($content));
    $minutes = ceil($wordCount / 190);
    return max(1, (int)$minutes) . ' min read';
}

/**
 * Relative time ago (e.g., "12 mins ago", "2 hours ago", "Yesterday")
 */
function timeAgo(string $datetime): string {
    $time = strtotime($datetime);
    if (!$time) return 'Recently';

    $diff = time() - $time;
    if ($diff < 60) {
        return 'Just now';
    } elseif ($diff < 3600) {
        $mins = floor($diff / 60);
        return $mins . ' min' . ($mins > 1 ? 's' : '') . ' ago';
    } elseif ($diff < 86400) {
        $hours = floor($diff / 3600);
        return $hours . ' hr' . ($hours > 1 ? 's' : '') . ' ago';
    } elseif ($diff < 172800) {
        return 'Yesterday at ' . date('g:ia', $time);
    } elseif ($diff < 604800) {
        $days = floor($diff / 86400);
        return $days . ' days ago';
    } else {
        return date('M j, Y', $time);
    }
}

/**
 * Inquiry Status Badge HTML
 */
function inquiryStatusBadge(string $status): string {
    $status = strtolower(trim($status));
    $badges = [
        'new' => [
            'label' => 'New Lead',
            'bg'    => 'rgba(200, 150, 62, 0.15)',
            'color' => '#dca74f',
            'border'=> 'rgba(200, 150, 62, 0.4)',
            'icon'  => 'fa-solid fa-sparkles'
        ],
        'in_review' => [
            'label' => 'Under Review',
            'bg'    => 'rgba(52, 152, 219, 0.15)',
            'color' => '#5dade2',
            'border'=> 'rgba(52, 152, 219, 0.4)',
            'icon'  => 'fa-solid fa-compass-drafting'
        ],
        'quoted' => [
            'label' => 'Dossier Quoted',
            'bg'    => 'rgba(155, 89, 182, 0.15)',
            'color' => '#bb8fce',
            'border'=> 'rgba(155, 89, 182, 0.4)',
            'icon'  => 'fa-solid fa-file-invoice-dollar'
        ],
        'confirmed' => [
            'label' => 'VIP Confirmed',
            'bg'    => 'rgba(46, 204, 113, 0.15)',
            'color' => '#2ecc71',
            'border'=> 'rgba(46, 204, 113, 0.4)',
            'icon'  => 'fa-solid fa-circle-check'
        ],
        'completed' => [
            'label' => 'Expedition Completed',
            'bg'    => 'rgba(255, 255, 255, 0.1)',
            'color' => '#ecf0f1',
            'border'=> 'rgba(255, 255, 255, 0.2)',
            'icon'  => 'fa-solid fa-flag-checkered'
        ],
        'archived' => [
            'label' => 'Archived',
            'bg'    => 'rgba(127, 140, 141, 0.15)',
            'color' => '#95a5a6',
            'border'=> 'rgba(127, 140, 141, 0.3)',
            'icon'  => 'fa-solid fa-box-archive'
        ]
    ];

    $cfg = $badges[$status] ?? [
        'label' => ucfirst($status),
        'bg'    => 'rgba(255, 255, 255, 0.1)',
        'color' => '#ffffff',
        'border'=> 'rgba(255, 255, 255, 0.2)',
        'icon'  => 'fa-solid fa-tag'
    ];

    return sprintf(
        '<span class="badge-status" style="background:%s; color:%s; border:1px solid %s; padding:5px 10px; border-radius:3px; font-size:11px; font-weight:700; letter-spacing:0.8px; text-transform:uppercase; display:inline-flex; align-items:center; gap:6px;"><i class="%s"></i>%s</span>',
        $cfg['bg'],
        $cfg['color'],
        $cfg['border'],
        $cfg['icon'],
        htmlspecialchars($cfg['label'])
    );
}

/**
 * Article Status Badge HTML
 */
function articleStatusBadge(string $status): string {
    $status = strtolower(trim($status));
    if ($status === 'published') {
        return '<span class="badge-status" style="background:rgba(46, 204, 113, 0.15); color:#2ecc71; border:1px solid rgba(46, 204, 113, 0.4); padding:4px 9px; border-radius:3px; font-size:11px; font-weight:700; letter-spacing:1px; text-transform:uppercase;"><i class="fa-solid fa-globe mr-1"></i>Published</span>';
    } else {
        return '<span class="badge-status" style="background:rgba(230, 126, 34, 0.15); color:#f39c12; border:1px solid rgba(230, 126, 34, 0.4); padding:4px 9px; border-radius:3px; font-size:11px; font-weight:700; letter-spacing:1px; text-transform:uppercase;"><i class="fa-solid fa-pen-ruler mr-1"></i>Draft</span>';
    }
}

/**
 * Resolve image URL cleanly
 */
function resolveMediaUrl(?string $path): string {
    if (empty($path)) {
        return '../images/tanzania-hero.jpg';
    }
    if (str_starts_with($path, 'http://') || str_starts_with($path, 'https://')) {
        return $path;
    }
    $clean = ltrim($path, '/');
    return '../' . $clean;
}
