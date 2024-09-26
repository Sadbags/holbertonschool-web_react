
interface MajorCredits {
    credits: number;
}

interface MinorCredits {
    credits: number;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits) {
    return { credits: subject1.credits + subject2.credits };
};

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits) {
    return { credits: subject1.credits + subject2.credits };
};

const major1: MajorCredits = { credits: 3 };
const major2: MajorCredits = { credits: 4 };
const minor1: MinorCredits = { credits: 2 };
const minor2: MinorCredits = { credits: 1 };

console.log(sumMajorCredits(major1, major2));
console.log(sumMinorCredits(minor1, minor2));