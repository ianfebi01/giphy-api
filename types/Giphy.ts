export interface IGiphy {
    type:                       string;
    id:                         string | number;
    url:                        string;
    slug:                       string;
    bitly_gif_url:              string;
    bitly_url:                  string;
    embed_url:                  string;
    username:                   string;
    source:                     string;
    title:                      string;
    rating:                     string;
    content_url:                string;
    source_tld:                 string;
    source_post_url:            string;
    is_sticker:                 boolean;
    import_datetime:            string;
    trending_datetime:          string;
    images:                     Images;
    analytics_response_payload: string;
    analytics?:                  Analytics;
    tags:                       any[];
    is_anonymous?:               boolean;
    is_community?:               boolean;
    is_featured?:                boolean;
    is_hidden:                  boolean;
    is_indexable:               boolean;
    is_preserve_size?:           boolean;
    is_realtime?:                boolean;
    is_removed:                 boolean;
    is_dynamic?:                 boolean;

}

export interface Analytics {
    onload:  Onclick;
    onclick: Onclick;
    onsent:  Onclick;
}

export interface Onclick {
    url: string;
}

export interface Images {
    original?:                 FixedHeight;
    downsized?:                The480_WStill;
    downsized_large?:          The480_WStill;
    downsized_medium?:         The480_WStill;
    downsized_small?:          DownsizedSmall;
    downsized_still?:          The480_WStill;
    fixed_height?:             FixedHeight;
    fixed_height_downsampled?: FixedHeight;
    fixed_height_small?:       FixedHeight;
    fixed_height_small_still?: The480_WStill;
    fixed_height_still?:       The480_WStill;
    fixed_width?:              FixedHeight;
    fixed_width_downsampled?:  FixedHeight;
    fixed_width_small?:        FixedHeight;
    fixed_width_small_still?:  The480_WStill;
    fixed_width_still?:        The480_WStill;
    looping?:                  DownsizedSmall;
    original_still?:           The480_WStill;
    original_mp4?:             DownsizedSmall;
    preview?:                  DownsizedSmall;
    preview_gif?:              The480_WStill;
    preview_webp?:             The480_WStill;
    "480w_still"?:             The480_WStill;
}

export interface The480_WStill {
    height?: number;
    width?:  number;
    size?:   string;
    url?:    string;
}

export interface DownsizedSmall {
    height:   number | null;
    width:    number | null;
    mp4_size?: string;
    mp4?:      string;
}

export interface FixedHeight {
    height?:    number;
    width?:     number;
    size?:      string;
    url?:       string;
    mp4_size?: string;
    mp4?:      string;
    webp_size?: string;
    webp?:      string;
    frames?:   string;
    hash?:     string;
}
