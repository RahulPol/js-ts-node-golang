package main

import "fmt"

type Journal struct {
	entries    []string
	entryCount int
}

func (j *Journal) addEntry(entry string) {
	j.entries = append(j.entries, entry)
	j.entryCount++
}

func (j *Journal) removeEntry() {
	j.entries = j.entries[:len(j.entries)-1]
	j.entryCount--
}

func (j *Journal) printEntries() {
	for _, v := range j.entries {
		fmt.Println(v)
	}
}

func NewJournal() *Journal {
	return &Journal{entries: make([]string, 0), entryCount: 0}
}

