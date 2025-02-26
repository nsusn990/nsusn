export interface Airtablerecord {
    records: Record[];
    offset:  string;
}

export interface Record {
    id:          string;
    createdTime: Date;
    fields:      Fields;
}

export interface Fields {
    id:          number;
    created_at:  Date;
    name:        string;
    companyName: string;
    imagelink:   string;
    linkedin:    string;
    description: string;
}
